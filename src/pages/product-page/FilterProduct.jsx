import { SelectSizes } from "@/components/select/SelectSizes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stack } from "@mui/material";
import Typography from "@/components/Typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectBrands from "@/components/select/SelectBrands";
import SelectCategory from "@/components/select/SelectCategory";
import { useState } from "react";

const schema = yup.object({
  search: yup.string().required("Type your search"),
});

const dataSizes = ["XS", "XL", "L", "M"];

function FilterProduct({ onSubmit, data }) {
  const dataCategories = data?.map((product) => product.category);
  const dataBrands = data?.map((product) => product.brand);
  let attributes = [];

  const customBrands = new Set(dataBrands);
  const newBrands = [...customBrands];
  const customCategories = new Set(dataCategories);
  const newCategories = [...customCategories];

  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);

  attributes = [...attributes, { brands }, { sizes }, { categories }];
  console.log(attributes);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      search: "",
    },
  });
  return (
    <div className="w-full lg:flex justify-between gap-10">
      <div className="mb-5 flex gap-2 justify-between ">
        <SelectBrands
          name="Brands"
          array={newBrands}
          brands={brands}
          setBrands={setBrands}
        />
        <SelectSizes
          name="Size"
          array={dataSizes}
          sizes={sizes}
          setSizes={setSizes}
        />
        <SelectCategory
          name="Categories"
          array={newCategories}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"row"} spacing={1}>
          <Input placeholder="Search..." {...register("search")} />
          {errors && (
            <Typography className="text-red-500">
              {errors.search?.message}
            </Typography>
          )}
          <Button type="submit" className=" hover:bg-blue-300 delay-100">
            Search
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default FilterProduct;
