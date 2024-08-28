import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
  message: "",
  success: false,
  status: "success",
};

export const getCartItems = createAsyncThunk("getCartItems", async () => {
  const response = await apiService.get(`/cartItems`);
  return response.data;
});

export const createAndResetCartItems = createAsyncThunk(
  "createAndResetCartItems",
  async ({ body, setBtnAddToCart }) => {
    await apiService
      .post(`/cartItems`, body)
      .then((res) => {
        Swal.fire({
          title: res.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setBtnAddToCart(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to add to cart !",
          text: "Error: " + err.message,
          icon: "error",
        });
        setBtnAddToCart(false);
      });
    const response = await apiService.get(`/cartItems`);
    return response;
  }
);

export const updateCartItem = createAsyncThunk(
  "updateCartItem",
  async ({ id, body, action }) => {
    await apiService
      .put(`/cartItems/${id}`, body)
      .then((response) => {
        Swal.fire({
          title: "Update item success !",
          text: response.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        action(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Update item success !",
          text: err.message,
          icon: "error",
        });
        action(false);
      });
    const response = await apiService.get(`/cartItems`);
    return response;
  }
);

export const deleteCartItem = createAsyncThunk(
  "deleteCartItem",
  async ({ id }) => {
    await apiService
      .delete(`/cartItems/${id}`)
      .then(() => {
        Swal.fire({
          title: "Remove item success !",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed to add to cart !",
          text: "Error: " + err.message,
          icon: "error",
        });
      });
    const response = await apiService.get(`/cartItems`);
    return response;
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
        state.status = "success";
        state.cartItems = action.payload;
        state.success = action.payload.success;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(createAndResetCartItems.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createAndResetCartItems.fulfilled, (state, action) => {
        state.status = "success";
        state.cartItems = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(createAndResetCartItems.rejected, (action, state) => {
        state.status = "rejected";
        state.message = action.payload.message;
      });
    builder
      .addCase(updateCartItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "success";
        state.cartItems = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload.message;
      });
    builder
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "success";
        state.cartItems = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload.message;
      });
  },
});

export default CartSlice.reducer;
