import apiService from "@/app/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  orders: [],
  ordersByCurrentUserId: [],
  success: false,
  status: "success",
  orderIdCreated: "",
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
      // const lastPrice = lastData["Giá trị"];
      const lastContent = lastData["Mô tả"];

      if (lastContent.includes(id)) {
        isFetching = true;

        //update order status
        const body = {};
        body.status = "accepted";
        await apiService.put(`/orders/${id}`, body);

        navigate("/");
        Swal.fire({
          title: "Payment success !",
          text: "Thanks for your order !",
          icon: "success",
        });
      } else {
        console.log("Order faild !");
      }
    } catch (error) {
      Swal.fire({
        title: "Error Payment !",
        text: error.message,
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
  async ({ page, limit, statusOrder }) => {
    try {
      const response = await apiService.get(
        `/orders/me?status=${statusOrder}&page=${page}&limit=${limit}`
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
      const timePayment = setInterval(() => {
        checKPayment(body.totalPrices, response.data._id, navigate);
      }, 2000);
      setTimeout(async () => {
        clearInterval(timePayment);

        Swal.fire({
          title: "Payment failed !",
          text: "Please rescan QR to payment !",
          icon: "warning",
        });

        setBtnOrder(false);

        await apiService.delete(`/orders/${response.data._id}`);
      }, 80000);
      return response;
    } catch (error) {
      Swal.fire({
        title: "Creating error !",
        text: error.message,
        icon: "warning",
      }).then(() => {
        navigate("/profile");
      });
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
          title: "Delete success !",
          text: "Order deleted !",
          icon: "success",
        });
        setBtnDeleteOrder(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Delete error !",
          text: error.message,
          icon: "error",
        });
        setBtnDeleteOrder(false);
      });
  }
);

export const deleteOrderItem = createAsyncThunk(
  "deleteOrderItem",
  async ({ orderItemId, setBtnDeleteOrder }) => {
    await apiService
      .delete(`/orderItems/${orderItemId}`)
      .then(() => {
        Swal.fire({
          title: "Delete success !",
          text: "Order item deleted !",
          icon: "success",
        });
        setBtnDeleteOrder(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Delete error !",
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
        state.ordersByCurrentUserId = action.payload;
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
        state.orderIdCreated = action.payload.data._id;
        state.success = action.payload.success;
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
    builder
      .addCase(deleteOrderItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteOrderItem.fulfilled, (state) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(deleteOrderItem.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default OrderSlice.reducer;
