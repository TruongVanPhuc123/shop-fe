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
  const data = products.data;

  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(50);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!data) {
    return (
      <div className="h-[100vh]">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="my-24">
      <Stack spacing={5} className="w-[80%]">
        <FilterProduct />
        <Products data={data} handleDetail={handleDetail} />
      </Stack>
    </Stack>
  );
}

export default index;
