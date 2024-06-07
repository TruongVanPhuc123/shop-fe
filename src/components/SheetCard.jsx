import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { ScrollArea } from "./ui/scroll-area";

export function SheetCard() {
  const count = 0;
  return (
    <Sheet>
      <SheetTrigger asChild className="group -m-2 flex items-center p-2">
        <div className="flex gap-3 items-center text-2xl text-gray-500 hover:text-sky-500 transition cursor-pointer">
          <HiMiniShoppingCart />
          <span>0</span>
        </div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-6 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6  pb-2 border-b-2">
          <SheetTitle>Card ({count})</SheetTitle>
        </SheetHeader>
        {count > 0 ? (
          <ScrollArea></ScrollArea>
        ) : (
          <>
            <div className="flex h-full flex-col gap-2 items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-60 w-60 text-muted-foreground"
              >
                <img
                  src="../../public/nav/hippo-empty-cart.png"
                  alt="empty shopping cart hippo"
                />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetDescription>
                Add items to your cart to checkout
              </SheetDescription>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
