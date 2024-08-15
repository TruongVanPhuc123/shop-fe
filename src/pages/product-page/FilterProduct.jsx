import { SelectAttribute } from "@/components/select/SelectAttribute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stack } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Typography from "@/components/Typography";

const schema = yup.object({
  search: yup.string().required("Type your search"),
});

const defaultValues = { search: "" };

function FilterProduct({ onSubmit, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
    
  const categories = data?.map(product => product.category);
  const brands = data?.map(product => product.brand);
  const sizes = ["XS", "XL", "L","M"];

  return (
    <div className="w-full lg:flex justify-between gap-10">
      <div className="mb-5 flex gap-2 justify-between ">
        <SelectAttribute name="Brands" />
        <SelectAttribute name="Size" />
        <SelectAttribute name="Categories" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={"row"}
          spacing={1}
          className="w-full sticky top-0 right-0"
        >
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
