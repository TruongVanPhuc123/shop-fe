import { getCartItems } from "@/feautures/cart/CartSlice";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Summary from "./Summary";
import Payment from "./Payment";
import { getOrders } from "@/feautures/order/OrderSlice";

function OrderPage() {
  const { cartItems, success } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const dataCartItems = cartItems?.cartItems;

  useEffect(() => {
    dispatch(getCartItems());
    dispatch(getOrders());
  }, [dispatch, success]);

  return (
    <Stack className="w-full my-24" alignItems={"center"} width={"100%"}>
      <div className="md:flex items-start justify-start w-[80%] gap-5">
        <Stack
          className="md:w-[30%]"
          justifyContent={"start"}
          alignItems={"start"}
        >
          {" "}
          <Summary dataCartItems={dataCartItems} />
        </Stack>
        <Stack
          className="md:w-[70%]"
          justifyContent={"start"}
          alignItems={"start"}
          spacing={2}
        >
          <Payment dataCartItems={dataCartItems} />
        </Stack>
      </div>
    </Stack>
  );
}

export default OrderPage;
