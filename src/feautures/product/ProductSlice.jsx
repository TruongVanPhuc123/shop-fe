import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idie",
};

export const getProducts = createAsyncThunk(
  "getProducts",
  async ({ page, limit }) => {
    const response = await apiService.get(`/products`);
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "idea";
        // console.log(action.payload);
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default ProductSlice.reducer;
