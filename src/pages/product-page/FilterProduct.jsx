import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stack } from "@mui/material";
import Typography from "@/components/Typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SelectProduct from "@/components/select/SelectProduct";

const schema = yup.object({
  search: yup.string().required("Type your search"),
});

const select = ["Prices gradually increase", "Prices gradually decrease"];

function FilterProduct({ onSubmit, data }) {
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
        <Typography>Sort by: </Typography>{" "}
        <SelectProduct name="Filter Product" array={select} />
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
