import CartSlice from "@/feautures/cart/CartSlice";
import ProductSlice from "@/feautures/product/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  product: ProductSlice,
  cart: CartSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
