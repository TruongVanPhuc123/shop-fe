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
  const handleOnValueChange = (element) => {
    if (element) {
      setStatusOrder(element);
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
              {element.status}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
