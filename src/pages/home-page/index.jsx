import HomeShow from "./HomeShow";
import HomeUtilities from "./HomeUtilities";
import HomeMoreProducts from "./HomeMoreProducts";
import HomeInstructAccount from "./HomeInstructAccount";
import HomeBestProduct from "./HomeBestProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "@/feautures/cart/CartSlice";

function index() {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch, success]);

  return (
    <div className=" w-full relative lg:mt-28 mt-28">
      <HomeShow />
      <HomeUtilities />
      <HomeMoreProducts />
      <HomeInstructAccount />
      <HomeBestProduct />
    </div>
  );
}

export default index;
