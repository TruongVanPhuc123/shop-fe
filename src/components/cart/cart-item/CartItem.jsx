import LoadingScreen from "@/components/LoadingScreen";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";

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
          {data.map((cartItem, index) => (
            <Stack key={index} direction={"row"} className="p-5" spacing={5}>
              <Box className="xl:w-[10%] w-auto">
                <img
                  src={`${cartItem.productItemId.productId.image}`}
                  alt="Image"
                />
              </Box>
              <div className="xl:flex w-full h-auto gap-10 items-center justify-between">
                <Stack spacing={1} className="mb-2">
                  <Typography className={"font-medium text-lg"}>
                    {cartItem.productItemId.productId.name}
                  </Typography>
                  <Typography
                    className={
                      "text-sm text-ellipsis overflow-hidden whitespace-nowrap w-full"
                    }
                  >
                    {cartItem.productItemId.productId.description}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"start"}
                  spacing={1}
                  className="mb-2"
                >
                  <Typography>Size: {cartItem.productItemId.size}</Typography>
                  <Typography>Color: {cartItem.productItemId.color}</Typography>
                </Stack>

                <Stack alignItems={"start"} justifyContent={"start"}>
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
                        <Typography className={"animate-spin"}>c</Typography>
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
                        <Typography className={"animate-spin"}>c</Typography>
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
                  Price: {cartItem.productItemId.price * cartItem.quantity}
                </Typography>
              </div>
            </Stack>
          ))}
        </>
      )}
      <Divider />
    </>
  );
}
