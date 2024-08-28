import apiService from "@/app/apiService";
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
          title: "Update User Success",
          text: res.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setBtnUpdateUser(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Update User Failed",
          text: "Error: " + error.message,
          icon: "error",
        });
        setBtnUpdateUser(false);
      });
    const response = await apiService.get(`/users/me`);
    return response;
  }
);

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
  const response = await apiService.get(`/users/me`);
  return response;
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
