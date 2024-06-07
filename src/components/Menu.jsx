import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="block sm:hidden transition text-2xl">
        <FiMenu />
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-6 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6  pb-2 border-b-2">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col gap-5 items-center justify-center space-y-1"></div>
      </SheetContent>
    </Sheet>
  );
}
