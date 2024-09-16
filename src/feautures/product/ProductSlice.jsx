/* eslint-disable no-unused-vars */
import apiService from "@/app/apiService";
import { cloudinaryUpload } from "@/utils/Cloudinary";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  products: [],
  productItems: [],
  productDetail: null,
  success: false,
  status: "success",
};

export const getProducts = createAsyncThunk(
  "getProducts",
  async ({ page, limit, search, sort }) => {
    try {
      let url = `/products?search=${search}&page=${page}&limit=${limit}`;

      if (sort !== null) {
        url += `&sort=${sort}`;
      }
      const response = await apiService.get(url);
      return response.data;
    } catch (error) {
      Swal.fire({
        title: "Get products failed",
        text: error.message,
        icon: "error",
      });
    }
  }
);

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async ({ id }) => {
    try {
      const response = await apiService.get(`/products/${id}`);
      return response;
    } catch (error) {
      Swal.fire({
        title: "Get products detail failed",
        text: error.message,
        icon: "error",
      });
    }
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async ({ body, setBtnCreateProduct, reset }) => {
    const image = body.image;
    const imageUrl = await cloudinaryUpload(image);
    body.image = imageUrl;

    await apiService
      .post(`/products`, body)
      .then(async (response) => {
        Swal.fire({
          title: response.message,
          icon: "success",
        });
        setBtnCreateProduct(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Create Product Failed",
          text: "Error: " + error.message,
          icon: "error",
        });
        setBtnCreateProduct(false);
      });
    reset();
    const response = await apiService.get(`/products`);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, body, setBtnUpdateProduct, reset }) => {
    const imageUrl = await cloudinaryUpload(body.image);
    body.image = imageUrl;
    await apiService
      .put(`/products/${id}`, body)
      .then((res) => {
        Swal.fire({
          title: "Update success !",
          text: res.message,
          icon: "success",
        });
        setBtnUpdateProduct(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Update failed !",
          text: error.message,
          icon: "error",
        });
        setBtnUpdateProduct(false);
      });
    reset();
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async ({ id }) => {
    await apiService
      .delete(`/products/${id}`)
      .then((res) => {
        Swal.fire({
          title: "Delete success !",
          text: res.message,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Delete failed !",
          text: error.message,
          icon: "error",
        });
      });
    const response = await apiService.get("/products");
    return response;
  }
);

export const createProductVariants = createAsyncThunk(
  "createProductVariants",
  async ({ body, setBtnCreateProductVariants, reset }) => {
    await apiService
      .post(`/productItems`, body)
      .then(async (response) => {
        Swal.fire({
          title: "Create success !",
          text: response.message,
          icon: "success",
        });
        setBtnCreateProductVariants(false);
        reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Create failed",
          text: "Error: " + error.message,
          icon: "error",
        });
        setBtnCreateProductVariants(false);
      });
  }
);

export const updateProductVariants = createAsyncThunk(
  "updateProductVariants",
  async ({ id, body, setBtnUpdateProductVariants, reset }) => {
    const response = await apiService
      .put(`/productItems/${id}`, body)
      .then((res) => {
        Swal.fire({
          title: "Update success !",
          text: res.message,
          icon: "success",
        });
        reset();
        setBtnUpdateProductVariants(false);
      })
      .catch((error) => {
        Swal.fire({
          title: "Update failed !",
          text: error.message,
          icon: "error",
        });
        setBtnUpdateProductVariants(false);
      });
    return response;
  }
);

export const deleteProductVariants = createAsyncThunk(
  "deleteProductVariants",
  async ({ id }) => {
    await apiService
      .delete(`/productItems/${id}`)
      .then((res) => {
        Swal.fire({
          title: "Delete success !",
          text: res.message,
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Delete failed !",
          text: "Error: " + error.message,
          icon: "error",
        });
      });
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
        state.status = "success";
        state.products = action.payload;
        state.success = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.status = "success";
        state.productDetail = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(createProduct.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(updateProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(createProductVariants.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createProductVariants.fulfilled, (state) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(createProductVariants.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(updateProductVariants.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProductVariants.fulfilled, (state, action) => {
        state.status = "success";
        state.productItems = action.payload.data;
        state.success = action.payload.success;
      })
      .addCase(updateProductVariants.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteProductVariants.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProductVariants.fulfilled, (state) => {
        state.status = "success";
        state.success = true;
      })
      .addCase(deleteProductVariants.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default ProductSlice.reducer;
