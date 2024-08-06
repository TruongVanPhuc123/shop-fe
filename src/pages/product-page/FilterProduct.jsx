import { SelectAttribute } from "@/components/SelectAttribute";
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

function FilterProduct({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  return (
    <div className="w-full lg:flex lg:justify-between gap-10">
      <Stack direction={"row"} spacing={2}>
        <SelectAttribute name="Brands" />
        <SelectAttribute name="Size" />
        <SelectAttribute name="Categories" />
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction={"row"}
          spacing={1}
          className="md:w-[80%] sticky top-0 right-0"
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
