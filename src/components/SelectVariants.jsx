import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectVariants({ name, array, setProductItem }) {
  const handleOnValueChange = (id) => {
    if (id) {
      let newValue = array.find((value) => value._id === id);
      setProductItem(newValue);
    }
  };

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${name}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {array?.map((element, index) => (
            <SelectItem key={index} value={element._id}>
              {`${element.size} - ${element.color}`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
