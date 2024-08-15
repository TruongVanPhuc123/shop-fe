import { Stack } from "@mui/material";
import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProductVariants } from "@/feautures/product/ProductSlice";
import { useState } from "react";

const schema = yup.object({
  price: yup.number().required(),
  color: yup.string().required(),
  size: yup.string().required(),
  quantity: yup.number().required(),
});

export default function FormCreateProductVariants({
  dataCreateProductVariant,
}) {
  const [btnCreateProductVariants, setBtnCreateProductVariants] =
    useState(false);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      price: null,
      color: "",
      size: "",
      quantity: null,
    },
  });

  const onSubmit = (data) => {
    const body = {};

    body.productId = dataCreateProductVariant._id;
    body.price = data.price;
    body.color = data.color;
    body.size = data.size;
    body.quantity = data.quantity;

    setBtnCreateProductVariants(true);
    dispatch(
      createProductVariants({
        body,
        setBtnCreateProductVariants,
        reset,
      })
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

        {!btnCreateProductVariants ? (
          <Button type="submit">Create Product Variants</Button>
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
