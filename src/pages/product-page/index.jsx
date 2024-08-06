import LoadingScreen from "@/components/LoadingScreen";
import { getProducts } from "@/feautures/product/ProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilterProduct from "./FilterProduct";
import Products from "./Products";
import { Stack } from "@mui/material";

function index() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("All");

  const data = products.products;

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const onSubmit = (data) => {
    if (data) {
      setSearch(data.search);
    }
  };

  useEffect(() => {
    dispatch(getProducts({ page, limit, search }));
  }, [dispatch, page, limit, search]);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="my-24">
      <Stack spacing={5} className="w-[80%]">
        <FilterProduct onSubmit={onSubmit} />
        {data ? (
          <Products
            data={data}
            handleDetail={handleDetail}
            page={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
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
