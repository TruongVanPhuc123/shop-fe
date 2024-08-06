import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function OrderSummary({ data, button }) {
  const totalPriceItem = data?.map(
    (item) => item.productItemId.price * item.quantity
  );
  const totalPrices = totalPriceItem?.reduce((total, item) => total + item, 0);
  const quantity = data?.map((cartItem) => cartItem.quantity);
  const totalQuantity = quantity?.reduce((acc, cur) => acc + cur);

  const vatTax = 2;

  const totalAfterVAT = totalPrices + vatTax;

  return (
    <Stack spacing={3} className="bg-slate-50 p-5 rounded-sm">
      <Typography className={"text-medium font-medium"}>
        Order Summary
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography className={"text-sm font-normal"}>
          Total Products
        </Typography>
        <Typography className={"text-sm font-bold"}>{data?.length}</Typography>
      </Stack>
      <Divider />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography className={"text-sm font-normal"}>
          Total Quantity
        </Typography>
        <Typography className={"text-sm font-bold"}>{totalQuantity}</Typography>
      </Stack>
      <Divider />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography className={"text-sm font-normal"}>V.A.T Tax</Typography>
        <Typography className={"text-sm font-bold"}>{vatTax}</Typography>
      </Stack>
      <Divider />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography className={"text-sm font-normal"}>Total Prices</Typography>
        <Typography className={"text-sm font-bold"}>{totalPrices}</Typography>
      </Stack>
      <Divider />
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography className={"text-medium font-medium"}>
          Order Total
        </Typography>
        <Typography className={"text-sm font-bold"}>{totalAfterVAT}</Typography>
      </Stack>
      {!button ? (
        <></>
      ) : (
        <Button>
          <Link to={"/order"} className="w-full">
            Checkout
          </Link>
        </Button>
      )}
    </Stack>
  );
}
