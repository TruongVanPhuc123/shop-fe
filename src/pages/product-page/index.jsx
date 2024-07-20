import LoadingScreen from "@/components/LoadingScreen";
import { getProducts } from "@/feautures/product/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilterProduct from "./FilterProduct";
import Products from "./Products";
import { Stack } from "@mui/material";

function index() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = products.products;

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="my-24">
      <Stack spacing={5} className="w-[80%]">
        <FilterProduct />
        {data ? (
          <Products data={data} handleDetail={handleDetail} />
        ) : (
          <Stack className="w-full relative top-20">
            <LoadingScreen />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default index;
