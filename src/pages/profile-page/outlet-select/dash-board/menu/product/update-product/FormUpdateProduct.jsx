import { Box, Stack } from "@mui/material";
import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "@/feautures/product/ProductSlice";

const schema = yup.object({
  name: yup.string(),
  brand: yup.string(),
  category: yup.string(),
  description: yup.string(),
});

export default function FormUpdateProduct({ dataUpdateProduct }) {
  const [btnUpdateProduct, setBtnUpdateProduct] = useState(false);
  const dispatch = useDispatch();
  const fileInput = useRef();

  const id = dataUpdateProduct?._id || null;
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: dataUpdateProduct?.name || "",
      brand: dataUpdateProduct?.brand || "",
      category: dataUpdateProduct?.category || "",
      image: dataUpdateProduct?.image || null,
      description: dataUpdateProduct?.description || "",
    },
  });

  const handleFile = () => {
    const file = fileInput.current.files[0];
    if (file) {
      setValue("image", file);
    }
  };

  const onSubmit = (body) => {
    setBtnUpdateProduct(true);
    dispatch(updateProduct({ id, body, setBtnUpdateProduct, reset }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width={"100%"} className="px-2">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          spacing={5}
        >
          <Stack spacing={1} width={"30%"}>
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
          <Stack spacing={1} width={"30%"}>
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
          <Stack spacing={1} width={"30%"}>
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
        <Stack spacing={2}>
          <Stack className="pb-2">
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
          {dataUpdateProduct?.image ? (
            <Box>
              <img width={"10%"} src={dataUpdateProduct?.image} alt="" />
            </Box>
          ) : (
            <></>
          )}
          <Stack spacing={1}>
            <Typography className={"font-bold text-"}>Image product</Typography>
            <Input type="file" ref={fileInput} onChange={handleFile} />
            {errors && (
              <Typography className="text-red-500">
                {errors.image?.message}
              </Typography>
            )}
          </Stack>
        </Stack>
        {!btnUpdateProduct ? (
          <Button type="submit">Update Product</Button>
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
