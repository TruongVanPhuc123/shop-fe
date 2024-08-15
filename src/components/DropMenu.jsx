import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Box } from "@mui/material";
import Typography from "./Typography";
import { Link } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { HiMiniShoppingCart } from "react-icons/hi2";

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-2xl">
        <IoMdMenu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>What your find?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to={"/profile"}>
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <MdAccountCircle />
            </Box>
            <Typography className={"font-medium"}>Account</Typography>
          </DropdownMenuItem>
        </Link>
        <Link to={"/"}>
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <IoMdHome />
            </Box>
            <Typography className={"font-medium"}>Home</Typography>
          </DropdownMenuItem>
        </Link>
        <Link to={"/products"}>
          {" "}
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <GiClothes />
            </Box>
            <Typography className={"font-medium"}>Product</Typography>
          </DropdownMenuItem>
        </Link>
        <Link to={"/cart"}>
          {" "}
          <DropdownMenuItem className="cursor-pointer">
            <Box className="mr-2">
              <HiMiniShoppingCart />
            </Box>
            <Typography className={"font-medium"}>Cart</Typography>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
