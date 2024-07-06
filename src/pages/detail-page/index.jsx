import {
  getProductDetail,
  getProductItems,
} from "@/feautures/product/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GroupImage from "./GroupImage";
import GroupDetail from "./GroupDetail";
import { Stack } from "@mui/material";

function index() {
  const { productDetail, productItems } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getProductDetail({ id }));
    dispatch(getProductItems({ id }));
  }, []);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      className="w-full my-10"
    >
      <div className="w-[80%] h-auto xl:p-10 grid xl:flex xl:items-center gap-10">
        <GroupImage />
        <GroupDetail
          productDetail={productDetail}
          productItems={productItems}
        />
      </div>
    </Stack>
  );
}

export default index;
