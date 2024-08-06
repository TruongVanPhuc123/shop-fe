import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const arrayStatus = [
  { status: "All" },
  { status: "pending" },
  { status: "accepted" },
  { status: "delivery" },
  { status: "received" },
  { status: "returns" },
  { status: "returned" },
];

export function SelectStatusOrderProfile({ name, setStatusOrder }) {
  const handleOnValueChange = (status) => {
    if (status) {
      setStatusOrder(status);
    }
  };

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${name}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {arrayStatus.map((element, index) => (
            <SelectItem key={index} value={element.status}>
              {`${element.status} `}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
