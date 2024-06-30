import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productDetail: null,
  productItems: {},
  status: "idie",
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await apiService.get(`/products`);
  return response.data;
});

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async ({ id }) => {
    console.log(id);
    const response = await apiService.get(`/products/${id}`);
    return response.data;
  }
);

export const getProductItems = createAsyncThunk(
  "getProductItems",
  async ({ id }) => {
    const response = await apiService.get(`/products/${id}/productItems`);
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
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.status = "idea";
        // console.log(action.payload);
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(getProductItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductItems.fulfilled, (state, action) => {
        state.status = "idea";
        // console.log(action.payload);
        state.productItems = action.payload;
      })
      .addCase(getProductItems.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default ProductSlice.reducer;
