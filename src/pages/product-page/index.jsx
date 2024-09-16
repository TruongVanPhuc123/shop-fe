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
  const [limit, setLimit] = useState(8);
  const [search, setSearch] = useState("All");
  const [sort, setSort] = useState(null);

  const data = products.products;
  const totalPages = products.totalPages;

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const onSubmit = (data) => {
    if (data) {
      setSearch(data.search);
    }
  };

  useEffect(() => {
    dispatch(getProducts({ page, limit, search, sort }));
  }, [dispatch, page, limit, search, sort]);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="my-24">
      <Stack spacing={5} className="w-[80%] relative">
        <FilterProduct onSubmit={onSubmit} setSort={setSort} />
        {data ? (
          <Products
            data={data}
            handleDetail={handleDetail}
            page={page}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        ) : (
          <Stack className="w-full relative ">
            <LoadingScreen />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default index;
