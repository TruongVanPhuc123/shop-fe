import { Stack } from "@mui/material";
import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProductVariants } from "@/feautures/product/ProductSlice";
import { useState } from "react";

const schema = yup.object({
  price: yup.number(),
  color: yup.string(),
  size: yup.string(),
  quantity: yup.number(),
});

export default function FormUpdateProductVariants({ productItem }) {
  const [btnUpdateProductVariants, setBtnUpdateProductVariants] =
    useState(false);
  const dispatch = useDispatch();

  const id = productItem?._id || null;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      price: productItem?.price || null,
      color: productItem?.color || "",
      size: productItem?.size || "",
      quantity: productItem?.quantity || null,
    },
  });

  const onSubmit = (body) => {
    setBtnUpdateProductVariants(true);
    dispatch(
      updateProductVariants({ id, body, setBtnUpdateProductVariants, reset })
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width={"100%"} className="px-2">
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={"100%"}
          spacing={5}
        >
          <Stack width={"50%"}>
            <Stack spacing={1}>
              <Typography className={"font-bold text-"}>
                Color product
              </Typography>
              <Input
                placeholder="example: Red"
                type="text"
                {...register("color")}
              />
              {errors && (
                <Typography className="text-red-500">
                  {errors.color?.message}
                </Typography>
              )}
            </Stack>
            <Stack spacing={1}>
              <Typography className={"font-bold text-"}>
                Size product
              </Typography>
              <Input
                placeholder="example: XL"
                type="text"
                {...register("size")}
              />
              {errors && (
                <Typography className="text-red-500">
                  {errors.size?.message}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack width={"50%"}>
            <Stack spacing={1}>
              <Typography className={"font-bold text-"}>
                Price product
              </Typography>
              <Input
                placeholder="example: 200"
                type="number"
                {...register("price")}
              />
              {errors && (
                <Typography className="text-red-500">
                  {errors.price?.message}
                </Typography>
              )}
            </Stack>
            <Stack spacing={1}>
              <Typography className={"font-bold text-"}>
                Quantity product
              </Typography>
              <Input
                placeholder="example: 50"
                type="number"
                {...register("quantity")}
              />
              {errors && (
                <Typography className="text-red-500">
                  {errors.quantity?.message}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>

        {!btnUpdateProductVariants ? (
          <Button type="submit">Update Product Variants</Button>
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
