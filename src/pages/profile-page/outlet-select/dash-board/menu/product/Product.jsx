import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  deleteProduct,
  deleteProductVariants,
  getProducts,
} from "@/feautures/product/ProductSlice";

import FormCreateProduct from "./create-product/FormCreateProduct";
import ListProductForm from "./list-product/ListProductForm";
import FormUpdateProduct from "./update-product/FormUpdateProduct";
import FormUpdateProductVariants from "./update-product-variants/FormUpdateProductVariants";
import FormCreateProductVariants from "./create-variants/FormCreateProductVariants";

export default function Product() {
  const { products, success } = useSelector((state) => state.product);
  const data = products?.products;
  const totalPages = products?.totalPages;
  const dispatch = useDispatch();

  const [dataUpdateProduct, setdataUpdateProduct] = useState({});
  const [dataCreateProductVariant, setdataCreateProductVariant] = useState({});
  const [productItem, setProductItem] = useState({});
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("All");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const handleBtnValue = (body) => {
    const { value, data, type } = body;
    setValue(value);

    if (type === "update-product") {
      setdataUpdateProduct(data);
    } else if (type === "delete-product") {
      dispatch(deleteProduct({ id: data }));
    } else if (type === "create-product-variants") {
      setdataCreateProductVariant(data);
    } else if (type === "delete-variants") {
      dispatch(deleteProductVariants({ id: productItem._id }));
    }
  };

  const accordion = [
    {
      value: "item-1",
      trigger: "List Product?",
      content: (
        <ListProductForm
          data={data}
          handleBtnValue={handleBtnValue}
          setProductItem={setProductItem}
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          setSearch={setSearch}
        />
      ),
    },
    {
      value: "item-2",
      trigger: "Create Product?",
      content: <FormCreateProduct />,
    },
    {
      value: "item-3",
      trigger: "Create Product Variants?",
      content: (
        <FormCreateProductVariants
          dataCreateProductVariant={dataCreateProductVariant}
        />
      ),
    },
    {
      value: "item-4",
      trigger: "Update Product?",
      content: <FormUpdateProduct dataUpdateProduct={dataUpdateProduct} />,
    },
    {
      value: "item-5",
      trigger: "Update Product Variants?",
      content: <FormUpdateProductVariants productItem={productItem} />,
    },
  ];

  useEffect(() => {
    dispatch(getProducts({ page, limit, search }));
  }, [dispatch, success, page, limit, search]);

  return (
    <Accordion type="single" collapsible value={value} onValueChange={setValue}>
      <Divider />
      {accordion?.map((acc, index) => (
        <AccordionItem key={index} value={acc.value}>
          <AccordionTrigger>{acc.trigger}</AccordionTrigger>
          <AccordionContent>{acc.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
