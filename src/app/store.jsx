import CartSlice from "@/feautures/cart/CartSlice";
import OrderSlice from "@/feautures/order/OrderSlice";
import ProductSlice from "@/feautures/product/ProductSlice";
import UserSlice from "@/feautures/user/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  product: ProductSlice,
  cart: CartSlice,
  user: UserSlice,
  order: OrderSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
