import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "@/feautures/cart/CartSlice";
import { Box, Divider, Stack } from "@mui/material";
import Typography from "./Typography";
import { Button } from "./ui/button";
import LoadingScreen from "./LoadingScreen";
// import { getProductDetail } from "@/feautures/product/ProductSlice";

export function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const count = cartItems?.count;
  const data = cartItems?.cartItems;

  console.log(cartItems);

  const totalPrices = data?.reduce(
    (total, product) => total + product.productItemId.price,
    0
  );
  const vatTax = 2;

  const newTotalPrices = totalPrices + vatTax;

  const handleActions = (data) => {
    const { type, id, body } = data;
    if (type === "DELETE") {
      dispatch(deleteCartItem({ id }));
    } else {
      dispatch(updateCartItem({ id, body }));
    }
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <Stack className="w-[80%] m-auto py-20" spacing={5}>
      <Typography className={"text-2xl font-bold"}>Shopping Cart</Typography>
      {count > 0 ? (
        <Stack
          direction={"row"}
          alignItems={"start"}
          width={"100%"}
          spacing={5}
        >
          <Stack width={"60%"} className="mt-10">
            <Divider />
            {!data ? (
              <Box className="relative h-[350px]">
                <LoadingScreen />
              </Box>
            ) : (
              <>
                {" "}
                {data.map((cartItem, index) => (
                  <Stack
                    key={index}
                    spacing={10}
                    direction={"row"}
                    alignItems={"center"}
                    className="p-5"
                  >
                    <Box>
                      <img src={``} alt="Image " />
                    </Box>
                    <Stack width={"100%"} spacing={3}>
                      <Stack
                        width={"100%"}
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography>
                          Size: {cartItem.productItemId?.size}
                        </Typography>
                        <Typography>
                          Color: {cartItem.productItemId?.color}
                        </Typography>
                        <Typography>{cartItem.productItemId?.price}</Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}
                      >
                        {" "}
                        <Button variant="outline" className="w-5 h-6 py-0">
                          -
                        </Button>
                        <Typography>{cartItem.quantity}</Typography>
                        <Button variant="outline" className="w-5 h-6 py-0">
                          +
                        </Button>
                      </Stack>
                      <Button
                        onClick={() =>
                          handleActions({
                            type: "DELETE",
                            id: cartItem._id,
                          })
                        }
                        variant="link"
                        className="text-black w-[10%] m-0"
                      >
                        Remove item
                      </Button>
                    </Stack>
                  </Stack>
                ))}
              </>
            )}
            <Divider />
          </Stack>
          <Stack width={"40%"}>
            <Stack spacing={3} className="bg-slate-50 p-5 rounded-sm">
              <Typography className={"text-medium font-medium"}>
                Order Summary
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography className={"text-sm font-normal"}>
                  Total Prices
                </Typography>
                <Typography className={"text-sm font-bold"}>
                  {totalPrices}
                </Typography>
              </Stack>
              <Divider />
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography className={"text-sm font-normal"}>
                  V.A.T Tax
                </Typography>
                <Typography className={"text-sm font-bold"}>
                  {vatTax}
                </Typography>
              </Stack>
              <Divider />
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography className={"text-sm font-normal"}>
                  Total Products
                </Typography>
                <Typography className={"text-sm font-bold"}>
                  {data.length}
                </Typography>
              </Stack>
              <Divider />
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography className={"text-medium font-medium"}>
                  Order Total
                </Typography>
                <Typography className={"text-sm font-bold"}>
                  {newTotalPrices}
                </Typography>
              </Stack>
              <Button>Checkout</Button>
            </Stack>
          </Stack>
        </Stack>
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
            <Typography>Add items to your cart to checkout</Typography>
          </div>
        </>
      )}
    </Stack>
  );
}
