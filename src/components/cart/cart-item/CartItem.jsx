import LoadingScreen from "@/components/LoadingScreen";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CartItem({ data, handleActions }) {
  const [btnUpdate, setBtnUpdate] = useState(false);

  const handlePrevQuantity = (data) => {
    setBtnUpdate(true);

    const currentQuantity = data.quantity;
    let quantity = 0;

    if (currentQuantity > 1) {
      quantity = currentQuantity - 1;
    }

    handleActions({
      type: "UPDATE",
      id: data.id,
      body: { quantity },
      action: setBtnUpdate,
    });
  };

  const handleNextQuantity = (data) => {
    setBtnUpdate(true);

    const currentQuantity = data.quantity;
    const quantity = currentQuantity + 1;

    handleActions({
      type: "UPDATE",
      id: data.id,
      body: { quantity },
      action: setBtnUpdate,
    });
  };

  return (
    <>
      <Divider />
      {!data ? (
        <Box className="relative h-[350px]">
          <LoadingScreen />
        </Box>
      ) : (
        <>
          {" "}
          {/* {data.map((cartItem, index) => (
            <div className="flex justify-between gap-2 p-2 w-full" key={index}>
              <img
                className="xl:w-[10%] w-1/2"
                src={`${cartItem.productItemId.productId.image || ""}`}
                alt="Image"
              />
              <div className="xl:flex xl:w-full xl:gap-10 w-1/2 items-center justify-between p-2">
                <Stack
                  spacing={1}
                  className="mb-2 xl:w-[20%] justify-between w-full"
                >
                  <Typography className={"font-medium text-lg"}>
                    {cartItem.productItemId.productId.name}
                  </Typography>
                  <Typography
                    className={
                      "text-sm text-ellipsis overflow-hidden whitespace-nowrap "
                    }
                  >
                    {cartItem.productItemId.productId.description}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"start"}
                  spacing={1}
                  className="mb-2 w-[20%]"
                >
                  <Typography>
                    Size:{" "}
                    <span className="border-b-2 border-b-rose-700">
                      {cartItem.productItemId.size}
                    </span>
                  </Typography>
                  <Typography>
                    Color:{" "}
                    <span className="border-b-2 border-b-rose-700">
                      {cartItem.productItemId.color}
                    </span>
                  </Typography>
                </Stack>

                <Stack
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  className="w-[20%]"
                >
                  <Stack direction={"row"} className="px-0" spacing={1}>
                    {" "}
                    {!btnUpdate ? (
                      <Button
                        onClick={() =>
                          handlePrevQuantity({
                            id: cartItem._id,
                            quantity: cartItem.quantity,
                          })
                        }
                        variant="outline"
                        className="w-5 h-6 py-0"
                      >
                        -
                      </Button>
                    ) : (
                      <Button
                        disabled
                        variant="outline"
                        className="w-5 h-6 py-0"
                      >
                        <Typography className={"animate-spin"}>
                          <AiOutlineLoading3Quarters />
                        </Typography>
                      </Button>
                    )}
                    <Typography>{cartItem.quantity}</Typography>
                    {!btnUpdate ? (
                      <Button
                        onClick={() =>
                          handleNextQuantity({
                            id: cartItem._id,
                            quantity: cartItem.quantity,
                          })
                        }
                        variant="outline"
                        className="w-5 h-6 py-0"
                      >
                        +
                      </Button>
                    ) : (
                      <Button
                        disabled
                        variant="outline"
                        className="w-5 h-6 py-0"
                      >
                        <Typography className={"animate-spin"}>
                          <AiOutlineLoading3Quarters />
                        </Typography>
                      </Button>
                    )}
                  </Stack>
                  <Button
                    onClick={() =>
                      handleActions({
                        type: "DELETE",
                        id: cartItem._id,
                      })
                    }
                    variant="link"
                    className="text-black p-0"
                  >
                    Remove item
                  </Button>
                </Stack>
                <Typography>
                  Price:{" "}
                  {`${cartItem.productItemId.price * cartItem.quantity}.000`}
                </Typography>
              </div>
            </div>
          ))} */}
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">Image</TableHead>
                <TableHead className="text-center">Name </TableHead>
                <TableHead className="text-center">Variant</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((cartItem, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={`${cartItem.productItemId.productId.image || ""}`}
                      alt="Image"
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Stack className="overflow-hidden">
                      <Typography className={"font-medium"}>
                        {cartItem.productItemId.productId.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell className="p-9">
                    {" "}
                    <Stack spacing={0}>
                      <Typography>
                        Size:{" "}
                        <span className="text-slate-400">
                          {cartItem.productItemId.size}
                        </span>
                      </Typography>
                      <Typography>
                        Color:{" "}
                        <span className="text-slate-400">
                          {cartItem.productItemId.color}
                        </span>
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      className="w-[20%]"
                    >
                      <Stack direction={"row"} className="px-0" spacing={1}>
                        {" "}
                        {!btnUpdate ? (
                          <Button
                            onClick={() =>
                              handlePrevQuantity({
                                id: cartItem._id,
                                quantity: cartItem.quantity,
                              })
                            }
                            variant="outline"
                            className="w-5 h-6 py-0"
                          >
                            -
                          </Button>
                        ) : (
                          <Button
                            disabled
                            variant="outline"
                            className="w-5 h-6 py-0"
                          >
                            <Typography className={"animate-spin"}>
                              <AiOutlineLoading3Quarters />
                            </Typography>
                          </Button>
                        )}
                        <Typography>{cartItem.quantity}</Typography>
                        {!btnUpdate ? (
                          <Button
                            onClick={() =>
                              handleNextQuantity({
                                id: cartItem._id,
                                quantity: cartItem.quantity,
                              })
                            }
                            variant="outline"
                            className="w-5 h-6 py-0"
                          >
                            +
                          </Button>
                        ) : (
                          <Button
                            disabled
                            variant="outline"
                            className="w-5 h-6 py-0"
                          >
                            <Typography className={"animate-spin"}>
                              <AiOutlineLoading3Quarters />
                            </Typography>
                          </Button>
                        )}
                      </Stack>
                      <Button
                        onClick={() =>
                          handleActions({
                            type: "DELETE",
                            id: cartItem._id,
                          })
                        }
                        variant="link"
                        className="text-black p-0"
                      >
                        Remove item
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Price:
                      <span className="text-slate-400">
                        {" "}
                        {`${
                          cartItem.productItemId.price * cartItem.quantity
                        }.000`}
                      </span>
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      <Divider />
    </>
  );
}
