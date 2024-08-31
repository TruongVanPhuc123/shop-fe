import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "@/feautures/cart/CartSlice";
import { Stack } from "@mui/material";
import Typography from "../Typography";
import OrderSummary from "./summary/OrderSummary";
import CartItem from "./cart-item/CartItem";

export function Cart() {
  const { cartItems, success } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const count = cartItems?.count;
  const data = cartItems?.cartItems;

  const handleActions = (data) => {
    const { type, id, body, action } = data;

    if (type === "DELETE") {
      dispatch(deleteCartItem({ id }));
    } else {
      dispatch(updateCartItem({ id, body, action }));
    }
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, success]);

  return (
    <Stack className="w-[80%] m-auto py-20 " spacing={5}>
      <Typography className={"text-2xl font-bold"}>Shopping Cart</Typography>
      {count > 0 ? (
        <div className="items-start w-full gap-10 md:flex">
          <div className="md:w-[60%] h-[500px] overflow-scroll">
            <CartItem data={data} handleActions={handleActions} />
          </div>
          <div className="md:w-[40%]">
            <OrderSummary data={data} button={true} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-full flex-col gap-2 items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <img
                src="/hippo-empty-cart.png"
                alt="empty shopping cart hippo"
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <Typography>Add items to your cart to checkout</Typography>
          </div>
        </>
      )}
    </Stack>
  );
}
