import apiService from "@/app/apiService";
import useAuth from "@/hooks/useAuth";
import { cloudinaryUpload } from "@/utils/Cloudinary";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  message: "",
  success: false,
  status: "success",
};

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ id, body, setBtnUpdateUser }) => {
    const image = body.avatarUrl;
    const imageUrl = await cloudinaryUpload(image);
    body.avatarUrl = imageUrl;

    await apiService
      .put(`/users/${id}`, body)
      .then((res) => {
        Swal.fire({
          title: "Update success !",
          text: res.message,
          icon: "success",
        });
        setBtnUpdateUser(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Update failed !",
          text: error.message,
          icon: "error",
        });
        setBtnUpdateUser(false);
      });
    const response = await apiService.get(`/users/me`);
    return response;
  }
);

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
  try {
    const response = await apiService.get(`/users/me`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
});

export const UserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
        state.user = action.payload.data;
        state.message = action.payload.message;
        state.success = action.payload.success;
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data;
        state.message = action.payload.message;
        state.success = action.payload.success;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default UserSlice.reducer;
