import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  status: "idie",
};

export const getCartItems = createAsyncThunk("getCartItems", async () => {
  const response = await apiService.get(`/cartItems`);
  return response.data;
});

export const createCartItems = createAsyncThunk(
  "createCartItems",
  async ({ body }) => {
    const response = await apiService.post(`/cartItems`, body);
    return response.data;
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = "idea";
        // console.log(action.payload);
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(createCartItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createCartItems.fulfilled, (state) => {
        state.status = "idea";
        // console.log(action.payload);
      })
      .addCase(createCartItems.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default CartSlice.reducer;
