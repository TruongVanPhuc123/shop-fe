import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  orders: [],
  orderIdCreated: null,
  success: false,
  status: "success",
};

let isFetching = false;

const checKPayment = async (price, id, navigate) => {
  if (isFetching) {
    return;
  } else {
    try {
      const res = await axios.get(
        `https://script.google.com/macros/s/AKfycbyRZOwsXHgZrwz-B7xVJaDVQbPEpXv5Equ6rdlB-gJi0RV0bkoHM86ODOl-ljbrmH6e/exec`
      );
      const data = res.data;
      const lastData = data.data[data.data.length - 1];
      const lastPrice = lastData["Giá trị"];
      const lastContent = lastData["Mô tả"];

      if (lastPrice >= price && lastContent.includes(id)) {
        isFetching = true;
        //update order status
        const body = {};
        body.status = "accepted";
        await apiService.put(`/orders/${id}`, body);

        //delete carItems after status is a accepted
        // await apiService.delete(`/cartItems/${id}`);

        navigate("/");
        Swal.fire({
          title: "Success Payment",
          text: "Thank you for your order",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error Payment",
          text: "Order failed",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error Payment",
        text: error.message,
        icon: "error",
      });
    }
  }
};

export const getOrders = createAsyncThunk("getOrders", async () => {
  const response = await apiService.get(`/orders`);
  return response.data;
});

export const getOrdersByCurrentUserId = createAsyncThunk(
  "getOrdersByCurrentUserId",
  async ({ id, page, limit, statusOrder }) => {
    const response = await apiService.get(
      `/orders/${id}?page=${page}&limit=${limit}&status=${statusOrder}`
    );
    return response.data;
  }
);

export const createOrder = createAsyncThunk(
  "createOrder",
  async ({ body, navigate, setBtnOrder }) => {
    try {
      const response = await apiService.post(`/orders`, body);
      setTimeout(() => {
        setInterval(() => {
          checKPayment(body.totalPrices, response.data._id, navigate, body);
        }, 1000);
      }, 5000);
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
  async ({ orderId, orderItemsId, setBtnDeleteOrder }) => {
    console.log({ orderItemsId });
    await apiService
      .delete(`/orders/${orderId}`, { orderItemsId })
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
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderIdCreated = action.payload._id;
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
