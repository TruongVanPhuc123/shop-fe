import { AlertDestructive } from "@/components/Alert";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createOrder } from "@/feautures/order/OrderSlice";
import useAuth from "@/hooks/useAuth";
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Payment({ dataCartItems }) {
  const [btnOrder, setBtnOrder] = useState(false);
  const [payHome, setPayHome] = useState(false);
  const [payOnline, setPayOnline] = useState(false);
  const [nameBank, setNameBank] = useState(null);
  const [numberBank, setNumberBank] = useState(null);
  const [error, setError] = useState(false);

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

  const handleOrder = (check) => {
    setBtnOrder(true);
    if (nameBank && numberBank === null) {
      setError(true);
      return;
    } else {
      const body = {};
      body.totalPrices = totalAfterVAT;
      if (check === "payOnline") {
        body.status = "accepted";
      } else {
        body.status = "pending";
      }
      dispatch(createOrder({ body, navigate, setBtnOrder }));
    }
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
      <Stack width={"100%"}>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>What is payment ?</Typography>
          {payHome || payOnline ? (
            <>
              <Button
                variant="link"
                onClick={() => {
                  setPayHome(false);
                  setPayOnline(false);
                  setError(false);
                }}
              >
                Payment Again !
              </Button>
            </>
          ) : (
            <></>
          )}
        </Stack>
        {!!error && <AlertDestructive title={"Type your info bank !"} />}
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={"100%"}
          className="mt-10"
        >
          <Stack width={"50%"} alignItems={"center"}>
            {!payOnline && (
              <Button
                onClick={() => setPayHome(true)}
                className={payHome ? "bg-green-300 w-full" : " w-[80%]"}
              >
                Payment Home
              </Button>
            )}
          </Stack>
          <Stack width={"50%"} alignItems={"center"}>
            {!payHome && (
              <Button
                onClick={() => setPayOnline(true)}
                className={payOnline ? "bg-green-300 w-full" : " w-[80%]"}
              >
                Payment Online
              </Button>
            )}
          </Stack>
        </Stack>
        {payOnline && (
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Stack className="w-1/2">
              {" "}
              <Typography className={"font-medium text-sm mb-2"}>
                Name Bank?
              </Typography>
              <Input
                placeholder="Truong Van Phuc"
                value={nameBank}
                onChange={(e) => setNameBank(e.target.value)}
              />
            </Stack>
            <Stack className="w-1/2">
              <Typography className={"font-medium text-sm mb-2"}>
                Number Bank?
              </Typography>
              <Input
                placeholder="12345678910"
                value={numberBank}
                onChange={(e) => setNumberBank(e.target.value)}
              />
            </Stack>
          </Stack>
        )}
        <Box className="mt-5">
          {payHome || payOnline ? (
            <>
              {" "}
              {!btnOrder ? (
                <Button
                  onClick={() => {
                    if (payHome) {
                      return handleOrder("payHome");
                    } else {
                      return handleOrder("payOnline");
                    }
                  }}
                  className="w-full"
                >
                  Order
                </Button>
              ) : (
                <Button disabled className="w-full">
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Typography className={"animate-spin"}>
                      <AiOutlineLoading3Quarters />
                    </Typography>
                    <Typography className={"cursor-wait"}>
                      Wait Payment
                    </Typography>
                  </Stack>
                </Button>
              )}
            </>
          ) : (
            <></>
          )}
        </Box>
      </Stack>
    </>
  );
}
