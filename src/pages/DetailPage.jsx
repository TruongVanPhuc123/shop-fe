import { SelectDemo } from "@/components/Select";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
  getProductDetail,
  getProductItems,
} from "@/feautures/product/ProductSlice";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createCartItems } from "@/feautures/cart/CartSlice";
import { useToast } from "@/components/ui/use-toast";

const schema = yup.object({
  quantity: yup.number(),
});

// let defaultValues = { quantity: 1, remember: true };

function DetailPage() {
  const params = useParams();
  const id = params.id;

  const { toast } = useToast();

  const dispatch = useDispatch();
  const { productDetail, productItems } = useSelector((state) => state.product);

  const [productItem, setProductItem] = useState({});
  const [quantity, setQuantity] = useState(1);

  const productItemId = productItem._id;

  const dataProductDetail = productDetail?.data;
  const dataProductItems = productItems.data;

  const category = dataProductDetail?.category;
  const brand = dataProductDetail?.brand;
  const name = dataProductDetail?.name;
  const description = dataProductDetail?.description;

  const onSubmit = (value) => {
    const quantity = value.quantity;
    dispatch(createCartItems({ body: { productItemId, quantity } }));
  };

  const handlePrevQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleNextQuantity = () => {
    setQuantity(quantity + 1);
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { quantity: quantity, remember: true },
  });

  useEffect(() => {
    dispatch(getProductDetail({ id }));
    dispatch(getProductItems({ id }));
  }, []);

  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="w-[80%] h-auto xl:p-10 grid xl:flex xl:items-center gap-10">
        <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
          <div>
            <img src="../../public/body/Bill.png" alt="" />
          </div>
          {/* show image with Array methods map */}
          <Stack direction={"row"} spacing={2}>
            <img
              className="xl:w-[20%] size-32"
              src="../../public/body/Bill.png"
              alt=""
            />
            <img
              className="xl:w-[20%] size-32"
              src="../../public/body/Bill.png"
              alt=""
            />
            <img
              className="xl:w-[20%] size-32"
              src="../../public/body/Bill.png"
              alt=""
            />
            <img
              className="xl:w-[20%] size-32"
              src="../../public/body/Bill.png"
              alt=""
            />
          </Stack>
        </Stack>
        <Stack spacing={3} justifyContent={"space-between"}>
          <Typography>Home / Hoodie</Typography>
          <Typography className="text-3xl font-bold">{name}</Typography>
          <Stack direction={"row"} spacing={2}>
            <Typography className="text-xl font-medium">
              Brand: {brand}
            </Typography>
            <Typography className="text-xl font-medium">
              Category: {category}
            </Typography>
          </Stack>
          <Typography className="text-xl font-bold text-gray-500">
            Price: {productItem.price || 0}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Stack direction={"row"} spacing={2}>
                {/* <SelectDemo name="Select Sizes" />
            <SelectDemo name="Select Colors" /> */}
                <SelectDemo
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
      </div>
    </div>
  );
}

export default DetailPage;
