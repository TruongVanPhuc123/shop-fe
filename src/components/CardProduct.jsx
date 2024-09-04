import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Stack } from "@mui/material";
import Typography from "./Typography";

export function CardProduct({
  src,
  nameCard,
  imgStyles,
  description,
  price,
  className,
  button,
  handleDetail,
}) {
  return (
    <Card className={className}>
      {src && <img className={imgStyles} src={src} />}
      {nameCard && (
        <CardTitle className="text-center lg:text-2xl text-xl">
          {nameCard}
        </CardTitle>
      )}
      {description && (
        <CardDescription className="text-center text-sm text-pretty uppercase tracking-tight">
          {description}
        </CardDescription>
      )}
      <div className="xl:flex items-center justify-between w-full">
        {price && (
          <Typography
            className={
              "text-sky-600 hover:border-b-2 cursor-pointer text-[12px] xl:text-[17px]"
            }
          >
            {price}
          </Typography>
        )}
        {button && (
          <Button className="w-[100%] lg:w-[40%]" onClick={handleDetail}>
            Detail
          </Button>
        )}
      </div>
    </Card>
  );
}
