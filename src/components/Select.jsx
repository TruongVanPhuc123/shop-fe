import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ name, array }) {
  console.log(array);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${name}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {array?.map((element) => (
            <SelectItem>{element}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
