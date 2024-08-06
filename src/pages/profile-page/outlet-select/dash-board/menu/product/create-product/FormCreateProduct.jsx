import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { Box, Stack } from "@mui/material";
import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { createProduct } from "@/feautures/product/ProductSlice";
import { useRef, useState } from "react";

const schema = yup.object({
  name: yup.string().required("Please type a product name"),
  brand: yup.string().required("Please type a product brand"),
  category: yup.string().required("Please type a product category"),
  description: yup.string().required("Please type a product description"),
});

const defaultValues = {
  name: "",
  brand: "",
  category: "",
  image: null,
  description: "",
};

export default function FormCreateProduct() {
  const [btnCreateProduct, setBtnCreateProduct] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const fileInput = useRef();

  const handleFile = () => {
    const file = fileInput.current.files[0];
    if (file) {
      setValue("image", file);
    }
  };

  const onSubmit = (data) => {
    setBtnCreateProduct(true);
    const { name, brand, category, description, image } = data;
    const body = {};

    body.name = name;
    body.brand = brand;
    body.category = category;
    // body.productItemId = "";
    body.image = image;
    body.description = description;

    dispatch(createProduct({ body, setBtnCreateProduct, reset }));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={3}
          className="px-2"
        >
          {" "}
          {/* Product */}
          <Stack spacing={1} width={"70%"}>
            <Typography className={"font-bold text-"}>Name product</Typography>
            <Input
              placeholder="example: Quatisted"
              type="text"
              {...register("name")}
            />
            {errors && (
              <Typography className="text-red-500">
                {errors.name?.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <Typography className={"font-bold text-"}>Brand product</Typography>
            <Input
              placeholder="example: Adidas"
              type="text"
              {...register("brand")}
            />
            {errors && (
              <Typography className="text-red-500">
                {errors.brand?.message}
              </Typography>
            )}
          </Stack>
          <Stack spacing={1}>
            <Typography className={"font-bold text-"}>
              Category product
            </Typography>
            <Input
              placeholder="example: Hoodie"
              type="text"
              {...register("category")}
            />
            {errors && (
              <Typography className="text-red-500">
                {errors.category?.message}
              </Typography>
            )}
          </Stack>
        </Stack>
        {/* Description && Image Product */}
        <Box>
          <Stack className="px-2">
            <Typography className={"font-bold text-"}>
              Description product
            </Typography>
            <Input
              placeholder="example: Use for going to the beach and for hot weather"
              type="text"
              {...register("description")}
            />
            {errors && (
              <Typography className="text-red-500">
                {errors.description?.message}
              </Typography>
            )}
          </Stack>
          <Stack className="px-2" spacing={1}>
            <Typography className={"font-bold text-"}>Image product</Typography>
            <Input type="file" ref={fileInput} onChange={handleFile} />
            {errors && (
              <Typography className="text-red-500">
                {errors.image?.message}
              </Typography>
            )}
          </Stack>
        </Box>
        {/* Button */}
        {!btnCreateProduct ? (
          <Button type="submit">Create Product</Button>
        ) : (
          <Button type="button" disabled>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography className={"animate-spin"}>
                <AiOutlineLoading3Quarters />
              </Typography>
              <Typography>Please Waiting</Typography>
            </Stack>
          </Button>
        )}
      </Stack>
    </form>
  );
}
