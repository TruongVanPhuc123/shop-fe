const cloudinary_name = "dm88fvsss";
const cloudinary_preset = "shop-website";
import axios from "axios";

export const cloudinaryUpload = async (image) => {
  console.log(image);
  if (!image) return "";
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", cloudinary_preset);

    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${cloudinary_name}/image/upload`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const imageUrl = response.data.secure_url;
    return imageUrl;
  } catch (error) {
    throw error;
  }
};
