import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectVariants } from "@/components/SelectVariants";
import { SelectAction } from "@/components/SelectAction";

export default function ListProductForm({
  data,
  handleBtnValue,
  setProductItem,
}) {
  return (
    <ScrollArea className="h-[500px]">
      <Table>
        <TableCaption>A list of products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl text-center font-bold">
              Image
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Name
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Brand
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Category
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Variants
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Price
            </TableHead>
            <TableHead className="text-xl text-center font-bold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((product, index) => (
            <TableRow key={index}>
              <TableCell className="w-[50px]">
                <img src={`${product.image}`} alt="Image" />
              </TableCell>
              <TableCell className="font-medium text-center">
                {product.name}
              </TableCell>
              <TableCell className="font-medium text-center">
                {product.brand}
              </TableCell>
              <TableCell className="font-medium text-center">
                {product.category}
              </TableCell>
              <TableCell className="font-medium text-center">
                <SelectVariants
                  name={"Variants"}
                  array={product.productItemId}
                  setProductItem={setProductItem}
                />
              </TableCell>
              <TableCell className="font-medium text-center">
                {product.category}
              </TableCell>
              <TableCell className="flex flex-col items-center">
                <SelectAction
                  handleBtnValue={handleBtnValue}
                  product={product}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
