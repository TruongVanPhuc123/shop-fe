import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typography from "./Typography";
import { IconButton, Stack } from "@mui/material";

import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { IoMdMenu } from "react-icons/io";

export function DialogOrder({
  title,
  description,
  data,
  handleDeleteOrder,
  btnDeleteOrder,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <React.Fragment>
        <IconButton onClick={handleClickOpen}>
          <IoMdMenu />
        </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <Table>
              <TableCaption>{description}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[10px]">Number</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Variants</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.orderItems.map((orderItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img
                        width={"50px"}
                        src={`${orderItem.productItemId.productId.image}`}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>
                      {orderItem.productItemId.productId.name}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Typography
                        className={
                          data.status.includes("accepted")
                            ? "text-lime-500"
                            : "text-rose-500"
                        }
                      >
                        {data.status}
                      </Typography>
                    </TableCell>
                    <TableCell>{orderItem.quantity}</TableCell>
                    <TableCell>
                      <Stack>
                        <Typography>
                          Size: {orderItem.productItemId.size}
                        </Typography>
                        <Typography>
                          Color: {orderItem.productItemId.color}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{orderItem.productItemId.price}</TableCell>
                    <TableCell>
                      {data.status.includes("accepted") ? (
                        <></>
                      ) : (
                        <IconButton
                          onClick={() =>
                            handleDeleteOrder({
                              type: "orderItem",
                              orderItemId: orderItem._id,
                            })
                          }
                        >
                          {!btnDeleteOrder ? (
                            <Typography>
                              <IoMdClose />
                            </Typography>
                          ) : (
                            <Typography className={"animate-spin"}>
                              <AiOutlineLoading3Quarters />
                            </Typography>
                          )}
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </>
  );
}
