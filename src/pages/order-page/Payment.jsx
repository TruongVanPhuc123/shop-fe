import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { createOrder } from "@/feautures/order/OrderSlice";
import useAuth from "@/hooks/useAuth";
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment({ dataCartItems, orderIdCreated }) {
  const [btnOrder, setBtnOrder] = useState(false);

  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const { user } = auth;
  const { avatarUrl, name, email, address, phoneNumber } = user;

  const totalPriceItem = dataCartItems?.map(
    (item) => item.productItemId.price * item.quantity
  );
  const totalPrices = totalPriceItem?.reduce((total, item) => total + item, 0);
  const vatTax = (totalPrices * 10) / 100;
  const totalAfterVAT = totalPrices + vatTax;

  const myBank = {
    BANK_ID: "MB",
    ACCOUNT_NO: "781234567891",
    TEMPLATE: "print",
    AMOUNT: totalAfterVAT,
  };
  let addInfo = `${orderIdCreated}`;

  let QR = `https://img.vietqr.io/image/${myBank.BANK_ID}-${myBank.ACCOUNT_NO}-print.png?amount=${myBank.AMOUNT}&addInfo=${addInfo}`;

  const handleOrder = () => {
    setBtnOrder(true);
    const body = {};
    body.totalPrices = totalAfterVAT;
    body.status = "pending";
    dispatch(createOrder({ body, navigate, setBtnOrder }));
  };

  return (
    <>
      <Typography className={"font-medium"}>Info</Typography>
      <Box className="w-full">
        <Divider />
        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          width={"100%"}
          spacing={2}
          padding={2}
          className={"font-mono"}
        >
          <Typography>Hi {name}</Typography>
          <Typography>
            Your email is:{" "}
            <span className="text-zinc-500 hover:border-b-2 cursor-pointer p-1">
              {email}
            </span>
          </Typography>
          <Typography>
            Your address is:{" "}
            <span className="text-zinc-500 hover:border-b-2 cursor-pointer p-1">
              {" "}
              {address}
            </span>
          </Typography>
          <Typography>
            Your phone number is:{" "}
            <span className="text-zinc-500 hover:border-b-2 cursor-pointer p-1">
              {" "}
              {phoneNumber}
            </span>
          </Typography>
        </Stack>
        <Divider />
      </Box>
      {!btnOrder ? (
        <Button onClick={handleOrder} className="w-full">
          Order
        </Button>
      ) : (
        <Button disabled className="w-full">
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography className={"animate-spin"}>
              <AiOutlineLoading3Quarters />
            </Typography>
            <Typography>Wait Payment</Typography>
          </Stack>
        </Button>
      )}
      {btnOrder && (
        <>
          {" "}
          <Typography className="font-medium">Payment</Typography>
          <Box className="w-full">
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
            >
              <img width={"40%"} src={QR} alt="" />
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}
