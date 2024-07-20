import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Stack } from "@mui/material";

export function SelectAction({ handleBtnValue, product }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select Here`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <Stack spacing={2} sx={{ p: 1 }}>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-4",
                  data: product,
                  type: "update-product",
                })
              }
              className="bg-emerald-400 hover:bg-emerald-300"
            >
              Update Product
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  type: "delete-product",
                  data: product._id,
                })
              }
              variant="destructive"
            >
              Delete Product
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-3",
                  data: product,
                  type: "create-product-variants",
                })
              }
              className="bg-emerald-400 hover:bg-emerald-300"
            >
              Create Variants
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  value: "item-5",
                })
              }
              className="bg-emerald-400 hover:bg-emerald-300"
            >
              Update Variants
            </Button>
            <Button
              onClick={() =>
                handleBtnValue({
                  type: "delete-variants",
                  data: product._id,
                })
              }
              variant="destructive"
            >
              Delete Variants
            </Button>
          </Stack>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
