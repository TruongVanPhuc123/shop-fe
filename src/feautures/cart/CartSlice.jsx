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

// export const getSingleCartItem = createAsyncThunk(
//   "getSingleCartItem",
//   async ({ id }) => {
//     const response = await apiService.get(`/cartItems/${id}`);
//     return response.data;
//   }
// );

export const createCartItems = createAsyncThunk(
  "createCartItems",
  async ({ body }) => {
    const response = await apiService.post(`/cartItems`, body);
    return response.data;
  }
);

export const updateCartItem = createAsyncThunk(
  "updateCartItem",
  async ({ id, body }) => {
    const response = await apiService.put(`/cartItems/${id}`, body);
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "deleteCartItem",
  async ({ id }) => {
    const response = await apiService.delete(`/cartItems/${id}`);
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
      })
      .addCase(createCartItems.rejected, (state) => {
        state.status = "rejected";
      });
    // builder
    //   .addCase(getSingleCartItem.pending, (state) => {
    //     state.status = "pending";
    //   })
    //   .addCase(getSingleCartItem.fulfilled, (state, action) => {
    //     state.status = "idea";
    //     state.cartItems = action.payload;
    //   })
    //   .addCase(getSingleCartItem.rejected, (state) => {
    //     state.status = "rejected";
    //   });
    builder
      .addCase(updateCartItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "idea";
        state.cartItems = action.payload;
      })
      .addCase(updateCartItem.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "idea";
        console.log(action);
        state.cartItems = action.payload;
      })
      .addCase(deleteCartItem.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default CartSlice.reducer;
