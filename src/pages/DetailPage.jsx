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

function DetailPage() {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const { productDetail, productItems, status } = useSelector(
    (state) => state.product
  );

  const [productItem, setProductItem] = useState({});

  const defaultQuantity = 1;

  const handleAddToCart = (body) => {
    console.log(body);
  };

  useEffect(() => {
    dispatch(getProductDetail({ id }));
    dispatch(getProductItems({ id }));
  }, [id, dispatch]);

  if (status !== "idea") {
    return <div>Loading ...</div>;
  }

  const dataProductDetail = productDetail;
  const dataProductItems = productItems.data;
  console.log(dataProductDetail);

  const { name, description, category, brand } = dataProductDetail;
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
            Price: {productItem.price}
          </Typography>
          <Stack direction={"row"} spacing={2}>
            {/* <SelectDemo name="Select Sizes" />
            <SelectDemo name="Select Colors" /> */}
            {/* <SelectDemo
              name="Variants"
              array={dataProductItems}
              setProductItem={setProductItem}
            /> */}
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="w-[40%]"
          >
            <Typography className={"font-medium"}>Quantity :</Typography>
            <Button variant="outline" className="w-5 h-6">
              -
            </Button>
            <Typography>{defaultQuantity}</Typography>
            <Button variant="outline" className="w-5 h-6">
              +
            </Button>
          </Stack>
          <Typography>{description}</Typography>
          <Stack direction={"row"} spacing={2}>
            <Button onClick={(body) => handleAddToCart(body)}>
              Add to cart
            </Button>
            <Button>Buy now</Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default DetailPage;
