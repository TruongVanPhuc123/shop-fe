import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  orders: [],
  orderIdCreated: null,
  success: false,
  status: "success",
};

export const getOrders = createAsyncThunk(
  "getOrders",
  async ({ page, limit, statusOrder }) => {
    try {
      const response = await apiService.get(
        `/orders?status=${statusOrder}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "Get orders failed !",
        text: error.message,
        icon: "error",
      });
    }
  }
);

export const getOrdersByCurrentUserId = createAsyncThunk(
  "getOrdersByCurrentUserId",
  async ({ id, page, limit, statusOrder }) => {
    try {
      const response = await apiService.get(
        `/orders/${id}?status=${statusOrder}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "Get orders failed !",
        text: error.message,
        icon: "error",
      });
    }
  }
);

export const createOrder = createAsyncThunk(
  "createOrder",
  async ({ body, navigate, setBtnOrder }) => {
    try {
      const response = await apiService.post(`/orders`, body);
      navigate("/");

      Swal.fire({
        title: "Success Payment",
        text: "Thanks for your order",
        icon: "success",
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "Error creating order",
        text: error.message,
        icon: "error",
      });
      setBtnOrder(false);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "deleteOrder",
  async ({ orderId, setBtnDeleteOrder }) => {
    await apiService
      .delete(`/orders/${orderId}`)
      .then(() => {
        Swal.fire({
          title: "Delete Order",
          text: "Order deleted",
          icon: "success",
        });
        setBtnDeleteOrder(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Delete Order",
          text: error.message,
          icon: "error",
        });
        setBtnDeleteOrder(false);
      });
  }
);

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = "success";
        state.orders = action.payload;
        state.success = action.payload.success;
      })
      .addCase(getOrders.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(getOrdersByCurrentUserId.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getOrdersByCurrentUserId.fulfilled, (state, action) => {
        state.status = "success";
        state.orders = action.payload;
        state.success = action.payload.success;
      })
      .addCase(getOrdersByCurrentUserId.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default OrderSlice.reducer;
