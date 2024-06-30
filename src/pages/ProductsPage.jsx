import { CardWithForm } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProducts } from "@/feautures/product/ProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const data = products.data;

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="my-28 flex flex-col justify-center items-center">
      <div className="w-[80%] flex flex-col gap-10">
        <div className=" w-full flex justify-between">
          <div className="flex gap-3">
            {/* <SelectDemo name="Brands" array={brands} />
            <SelectDemo name="Size" array={sizes} />
            <SelectDemo name="Categories" array={categories} /> */}
          </div>
          <div className="w-[30%] flex gap-1 sticky ">
            <Input placeholder="Search ..." />
            <Button className=" hover:bg-blue-300 delay-100">Search</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-3  gap-4">
          {data?.map((element, index) => (
            <CardWithForm
              className="md:w-[360px] w-[100px]"
              src={"../../public/body/Brazuca - UI Design.png"}
              nameCard={element.name}
              imgStyles={"w-[50%]"}
              description={element.description}
              button={true}
              handleClick={() => handleClick(element._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
