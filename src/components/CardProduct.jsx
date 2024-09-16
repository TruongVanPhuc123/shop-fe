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
      <div className="xl:flex items-center gap-2">
        {description && (
          <CardDescription className="text-center text-sm text-pretty uppercase tracking-tight">
            {description}
          </CardDescription>
        )}
        {price && (
          <Typography className={"text-rose-300 text-[12px] xl:text-[17px]"}>
            {price}
          </Typography>
        )}
      </div>
      {button && (
        <Button className="w-[100%] lg:w-[50%]" onClick={handleDetail}>
          Detail
        </Button>
      )}
    </Card>
  );
}
