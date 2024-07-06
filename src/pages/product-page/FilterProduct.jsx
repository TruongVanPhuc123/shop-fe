import { SelectAttribute } from "@/components/SelectAttribute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Stack } from "@mui/material";

function FilterProduct() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      className=" w-full "
    >
      <Stack direction={"row"} spacing={2}>
        <SelectAttribute name="Brands" />
        <SelectAttribute name="Size" />
        <SelectAttribute name="Categories" />
      </Stack>
      <Stack
        direction={"row"}
        spacing={1}
        className="w-[30%] sticky top-0 right-0"
      >
        <Input placeholder="Search ..." />
        <Button className=" hover:bg-blue-300 delay-100">Search</Button>
      </Stack>
    </Stack>
  );
}

export default FilterProduct;
