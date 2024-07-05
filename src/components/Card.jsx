import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import Typography from "./Typography";
import { Stack } from "@mui/material";
import ImageBox from "./ImageBox";
import { FaExchangeAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiTwotoneTool } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { Dialog } from "./Dialog";
import { Input } from "./ui/input";
import { useState } from "react";

export function CardWithForm({
  src,
  nameCard,
  imgStyles,
  description,
  className,
  button,
  handleClick,
  data,
  handleActions,
}) {
  const productItemId = data?.productItemId;
  const [quantity, setQuantity] = useState(data?.quantity);

  const handleChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <Card
      className={
        !className
          ? "w-full h-auto hover:shadow-xl flex flex-col items-center justify-between gap-5 lg:p-10 p-5 transition delay-75 ease-linear cursor-pointer"
          : className
      }
    >
      {src && <img className={imgStyles} src={src} />}
      {nameCard && <CardTitle className="text-center">{nameCard}</CardTitle>}
      {description && (
        <CardDescription className="text-center text-[12px] text-pretty ">
          {description}
        </CardDescription>
      )}
      {data && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="w-full"
        >
          <ImageBox
            divStyles={"w-full"}
            //src={`${productItemId?.image}`}
            src={"../../public/body/Brazuca - UI Design.png"}
            alt={"Image"}
          />
          <Stack
            className="w-full"
            justifyContent={"space-between"}
            spacing={2}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack justifyContent={"space-between"}>
                <Typography>Size : {productItemId?.size}</Typography>
                <Typography>Color : {productItemId?.color}</Typography>
              </Stack>
              <Stack justifyContent={"space-between"}>
                <Typography> Quantity: {data?.quantity}</Typography>
                <Typography>Price: {productItemId?.price}</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-around"} gap={1}>
              <Stack spacing={2}>
                <Button className="flex gap-2">
                  <FaCartShopping />
                  Buy now
                </Button>
                <Button className="bg-amber-400 hover:bg-amber-300 flex gap-2">
                  <FaExchangeAlt />
                  Change
                </Button>
              </Stack>
              <Stack spacing={2}>
                <Dialog
                  trigger={
                    <>
                      <AiTwotoneTool />
                      Update
                    </>
                  }
                  variant={"destructive"}
                  btnStyles="bg-emerald-400 hover:bg-emerald-300 flex gap-2 "
                  title={"Do you want to update?"}
                  description={""}
                  quantity={quantity}
                  action={() =>
                    handleActions({
                      type: "UPDATE",
                      id: data._id,
                      body: { quantity: Number(quantity) },
                    })
                  }
                  handleChange={handleChange}
                />
                <Dialog
                  trigger={
                    <>
                      <MdDelete /> Delete
                    </>
                  }
                  variant={"destructive"}
                  btnStyles="flex gap-2"
                  title="Do you want to delete?"
                  description={""}
                  action={() => handleActions({ type: "DELETE", id: data._id })}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}

      {button && <Button onClick={handleClick}>Detail</Button>}
    </Card>
  );
}
