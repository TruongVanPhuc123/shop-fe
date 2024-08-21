import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectCategory({
  name,
  array,
  categories,
  setCategories,
}) {
  const handleOnValueChange = (element) => {
    setCategories([...categories, element]);
  };

  return (
    <Select onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`${name}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {array?.map((element, index) => (
            <SelectItem key={index} value={element}>
              {`${element}`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
