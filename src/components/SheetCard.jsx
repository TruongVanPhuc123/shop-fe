import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { ScrollArea } from "./ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "@/feautures/cart/CartSlice";
import { CardWithForm } from "./Card";
import { Stack } from "@mui/material";

export function SheetCard() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const count = cartItems?.count;
  const data = cartItems?.data;
  const totalPages = cartItems?.totalPages;
  const defaultCount = 0;

  const handleActions = (data) => {
    const { type, id, body } = data;
    console.log(data);
    if (type === "DELETE") {
      dispatch(deleteCartItem({ id }));
    } else {
      dispatch(updateCartItem({ id, body }));
    }
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [cartItems, dispatch]);

  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <div className="flex gap-3 items-center text-2xl text-gray-500 hover:text-sky-500 transition cursor-pointer">
          <HiMiniShoppingCart />
          <span>{!count ? defaultCount : count}</span>
        </div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-6 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6  pb-2 border-b-2">
          <SheetTitle>Card ({!count ? defaultCount : count})</SheetTitle>
        </SheetHeader>
        {count > 0 ? (
          <ScrollArea>
            <Stack spacing={3}>
              {data?.map((elemnt, index) => (
                <CardWithForm
                  key={index}
                  className={"w-full flex justify-around items-center p-5"}
                  data={elemnt}
                  handleActions={handleActions}
                />
              ))}
            </Stack>
          </ScrollArea>
        ) : (
          <>
            <div className="flex h-full flex-col gap-2 items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <img
                  src="../../public/nav/hippo-empty-cart.png"
                  alt="empty shopping cart hippo"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetDescription>
                Add items to your cart to checkout
              </SheetDescription>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
