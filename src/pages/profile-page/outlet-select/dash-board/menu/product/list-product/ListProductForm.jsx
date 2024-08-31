import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectVariants } from "@/components/select/SelectVariants";
import { SelectAction } from "@/components/select/SelectAction";
import { Box, Stack } from "@mui/material";
import { Button } from "@/components/ui/button";
import Typography from "@/components/Typography";
import { Input } from "@/components/ui/input";

import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LoadingScreen from "@/components/LoadingScreen";

const schema = yup.object({
  search: yup.string().required("Type your search"),
});

const defaultValues = { search: "" };

export default function ListProductForm({
  data,
  handleBtnValue,
  setProductItem,
  totalPages,
  page,
  setPage,
  setSearch,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

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
    setSearch(data.search);
  };

  return (
    <Table>
      <TableCaption>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="w-full p-2"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Input
                type="text"
                placeholder="Type 'All' show all product"
                {...register("search")}
              />
              {!!errors && (
                <Typography className="text-red-500">
                  {errors.search?.message}
                </Typography>
              )}
              <Button type="submit">Search</Button>
            </Stack>
          </form>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button variant="ghost" onClick={handlePrevPage}>
              <MdOutlineNavigateBefore />
            </Button>
            <Typography>{page}</Typography>
            <Button variant="ghost" onClick={handleNextPage}>
              <MdOutlineNavigateNext />
            </Button>
          </Stack>
          <Box>
            <Typography className={"font-medium"}>
              totalPages: {totalPages}
            </Typography>
          </Box>
        </Stack>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Variants</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data ? (
          <>
            {" "}
            {data?.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="w-[50px]">
                  <img src={`${product.image}`} alt="Image" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <SelectVariants
                    name={"Variants"}
                    array={product.productItems}
                    setProductItem={setProductItem}
                  />
                </TableCell>

                <TableCell>
                  <SelectAction
                    handleBtnValue={handleBtnValue}
                    product={product}
                  />
                </TableCell>
              </TableRow>
            ))}
          </>
        ) : (
          <Box className="relative w-full">
            <LoadingScreen />
          </Box>
        )}
      </TableBody>
    </Table>
  );
}
