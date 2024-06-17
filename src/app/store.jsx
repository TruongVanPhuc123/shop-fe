import ProductSlice from "@/feautures/product/ProductSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  product: ProductSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
