import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Divider, Stack } from "@mui/material";
import Typography from "./Typography";

import { MdDelete } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";

export function SelectAction({ handleBtnValue, product }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select Here`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="font-medium">Product</SelectLabel>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-4",
                  data: product,
                  type: "update-product",
                })
              }
              className="bg-emerald-400 hover:bg-emerald-300 flex gap-2"
            >
              <AiFillTool />
              <Typography> Update Product</Typography>
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  type: "delete-product",
                  data: product._id,
                })
              }
              variant="destructive"
              className="flex gap-2"
            >
              <MdDelete />
              <Typography> Delete Product</Typography>
            </Button>
            <Divider />
          </Stack>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Product Variant</SelectLabel>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-3",
                  data: product,
                  type: "create-product-variants",
                })
              }
              className="bg-yellow-400 hover:bg-yellow-300 flex gap-2"
            >
              <MdAddBox />
              <Typography>Create Variants</Typography>
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-5",
                })
              }
              className="bg-emerald-400 hover:bg-emerald-300 flex gap-2"
            >
              <AiFillTool />
              <Typography> Update Variants</Typography>
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  type: "delete-variants",
                  data: product._id,
                })
              }
              variant="destructive"
              className="flex gap-2"
            >
              <MdDelete />
              <Typography> Delete Variants</Typography>
            </Button>
          </Stack>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
