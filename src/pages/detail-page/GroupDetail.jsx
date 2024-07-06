import { createAndResetCartItems } from "@/feautures/cart/CartSlice";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SelectVariants } from "@/components/SelectVariants";

const schema = yup.object({
  quantity: yup.number(),
});

// let defaultValues = { quantity: 1, remember: true };

function GroupDetail({ productDetail, productItems }) {
  const dispatch = useDispatch();

  const [productItem, setProductItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { quantity: quantity, remember: true },
  });

  const dataProductDetail = productDetail?.data;
  const dataProductItems = productItems.data;

  const category = dataProductDetail?.category;
  const brand = dataProductDetail?.brand;
  const name = dataProductDetail?.name;
  const description = dataProductDetail?.description;
  const price = productItem.price;

  const productItemId = productItem._id;

  const onSubmit = (value) => {
    const quantity = value.quantity;
    dispatch(createAndResetCartItems({ body: { productItemId, quantity } }));
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
    <Stack spacing={3} justifyContent={"space-between"}>
      <Typography>Home / Hoodie</Typography>
      <Typography className="text-3xl font-bold">{name}</Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography className="text-xl font-medium">Brand: {brand}</Typography>
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
            {/* <SelectDemo name="Select Sizes" />
            <SelectDemo name="Select Colors" /> */}
            <SelectVariants
              name="Variants"
              array={dataProductItems}
              setProductItem={setProductItem}
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="w-[40%]"
          >
            <Typography className={"font-medium"}>Quantity :</Typography>
            <Button
              onClick={handlePrevQuantity}
              variant="outline"
              className="w-5 h-6"
            >
              -
            </Button>
            <Typography {...register("quantity")}>{quantity}</Typography>
            <Button
              onClick={handleNextQuantity}
              variant="outline"
              className="w-5 h-6"
            >
              +
            </Button>
          </Stack>
          <Typography>{description}</Typography>
          <Stack direction={"row"} spacing={2}>
            <Button type="submit">Add to cart</Button>
            <Button>Buy now</Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}

export default GroupDetail;
