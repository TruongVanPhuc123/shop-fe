/* eslint-disable react-hooks/rules-of-hooks */
import { getProductDetail } from "@/feautures/product/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GroupImage from "./GroupImage";
import GroupDetail from "./GroupDetail";
import { Box, Stack } from "@mui/material";

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
      <div className="w-[80%] h-auto xl:flex xl:items-center gap-10  ">
        <Box className="xl:w-[50%]">
          <GroupImage productDetail={productDetail} />
        </Box>
        <Box className="w-50% mt-2">
          <GroupDetail productDetail={productDetail} />
        </Box>
      </div>
    </Stack>
  );
}

export default index;
