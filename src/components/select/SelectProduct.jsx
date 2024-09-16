import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography from "../Typography";

import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export default function SelectProduct({ setSort }) {
  const handleOnValueChange = (element) => {
    setSort(element);
  };

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Filter Product`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"all"}>
            <Typography className={"flex items-center justify-center"}>
              All prices
            </Typography>
          </SelectItem>
          <SelectItem value={"increase"}>
            <Typography className={"flex items-center justify-center"}>
              Price <MdNavigateNext />
              200,000{" "}
            </Typography>
          </SelectItem>
          <SelectItem value={"decrease"}>
            <Typography className={"flex items-center justify-center"}>
              Price <MdNavigateBefore /> 200,000
            </Typography>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
