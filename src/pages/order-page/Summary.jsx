import OrderSummary from "@/components/cart/summary/OrderSummary";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Box, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Summary({ dataCartItems }) {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography className={"font-medium"}>List Items</Typography>
        <Link to={"/cart"}>
          <Button variant="link" className={"font-medium"}>
            Edit
          </Button>
        </Link>
      </Stack>
      <Box className="w-full">
        <Divider />
        {dataCartItems?.map((cartItem, index) => (
          <Stack
            key={index}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            padding={2}
            spacing={1}
          >
            <Typography className={"text-sm font-medium"}>
              {cartItem.productItemId.productId.name}
            </Typography>
            <Typography className={"text-sm font-medium"}>
              {cartItem.quantity}
            </Typography>
            <Typography className={"text-xs text-gray-400"}>
              {cartItem.productItemId.price * cartItem.quantity}.000
            </Typography>
          </Stack>
        ))}
        <Divider />
      </Box>
      <Stack className="w-full mt-4" spacing={2}>
        <OrderSummary data={dataCartItems} button={false} />
      </Stack>
    </>
  );
}
