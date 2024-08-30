/* eslint-disable react/prop-types */
import { createAndResetCartItems } from "@/feautures/cart/CartSlice";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SelectVariants } from "@/components/select/SelectVariants";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const schema = yup.object({
  quantity: yup.number(),
});

function GroupDetail({ productDetail }) {
  const [productItem, setProductItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [btnAddToCart, setBtnAddToCart] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { quantity: quantity, remember: true },
  });

  const arrayProductVariants = productDetail?.productItems;

  const category = productDetail?.category;
  const name = productDetail?.name;
  const description = productDetail?.description;
  const price = productItem.price;

  const productItemId = productItem._id;

  const onSubmit = () => {
    setBtnAddToCart(true);

    dispatch(
      createAndResetCartItems({
        body: { productItemId, quantity },
        setBtnAddToCart,
      })
    );
  };

  const handlePrevQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleNextQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Stack spacing={3} justifyContent={"start"} className="w-full h-full ">
      <Typography className="text-3xl font-bold">{name}</Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography className="text-xl font-medium">
          Category: {category}
        </Typography>
      </Stack>
      <Typography className="text-xl font-bold text-gray-500">
        Price: {price || 0}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack direction={"row"} spacing={2}>
            <SelectVariants
              name="Variants"
              array={arrayProductVariants}
              setProductItem={setProductItem}
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            className="w-[100%]"
            spacing={1}
          >
            <Typography className={"font-medium"}>Quantity :</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={"30%"}
              spacing={2}
            >
              <Button
                onClick={handlePrevQuantity}
                variant="outline"
                className="w-5 h-6"
                type="button"
              >
                -
              </Button>
              <Typography {...register("quantity")}>{quantity}</Typography>
              <Button
                onClick={handleNextQuantity}
                variant="outline"
                className="w-5 h-6"
                type="button"
              >
                +
              </Button>
            </Stack>
          </Stack>
          <Typography>{description}</Typography>
          {!btnAddToCart ? (
            <div className="xl:w-[30%] w-full">
              <Button type="submit" className="w-full">
                Add to cart
              </Button>
            </div>
          ) : (
            <Button disabled className="xl:w-[30%]">
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
    </Stack>
  );
}

export default GroupDetail;
