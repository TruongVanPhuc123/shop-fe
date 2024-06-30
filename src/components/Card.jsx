import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { SelectDemo } from "./Select";
import Typography from "./Typography";

export function CardWithForm({
  src,
  nameCard,
  imgStyles,
  description,
  className,
  button,
  handleClick,
  data,
}) {
  const productItemId = data;
  // console.log(productItemId);
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
        <>
          <Typography>Size : {productItemId?.size}</Typography>
          <Typography>Color : {productItemId?.color}</Typography>
        </>
      )}

      {button && <Button onClick={handleClick}>Detail</Button>}
    </Card>
  );
}
