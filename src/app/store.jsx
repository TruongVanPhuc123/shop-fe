import CartSlice from "@/feautures/cart/CartSlice";
import ProductSlice from "@/feautures/product/ProductSlice";
import UserSlice from "@/feautures/user/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  product: ProductSlice,
  cart: CartSlice,
  user: UserSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
