import { SelectDemo } from "@/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProducts } from "@/feautures/product/ProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const sizes = products.sizes;
  const categories = products.categories;
  const brands = products.brands;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    dispatch(getProducts({ page, limit }));
  }, [page, limit, dispatch]);

  return (
    <div className="mt-28">
      <div className="w-[80%] flex justify-center items-center">
        <div className="flex justify-between">
          <div>
            <SelectDemo name="Brands" array={brands} />
          </div>
          <div className="w-[50%] flex gap-1">
            <Input placeholder="Search ..." />
            <Button className=" hover:bg-blue-300">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
