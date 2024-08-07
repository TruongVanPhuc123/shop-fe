/* eslint-disable react-hooks/rules-of-hooks */
import { getProductDetail } from "@/feautures/product/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GroupImage from "./GroupImage";
import GroupDetail from "./GroupDetail";
import { Stack } from "@mui/material";

function index() {
  const { productDetail } = useSelector((state) => state.product);
  const { success } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(getProductDetail({ id }));
  }, [dispatch, success]);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      className="w-full my-10"
    >
      <div className="w-[80%] h-auto xl:flex xl:items-start gap-10  ">
        <GroupImage productDetail={productDetail} />
        <GroupDetail productDetail={productDetail} />
      </div>
    </Stack>
  );
}

export default index;
