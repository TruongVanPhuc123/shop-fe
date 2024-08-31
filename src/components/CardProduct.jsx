import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

export function CardProduct({
  src,
  nameCard,
  imgStyles,
  description,
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
      {button && (
        <Button className="w-[100%] lg:w-[40%]" onClick={handleDetail}>
          Detail
        </Button>
      )}
    </Card>
  );
}
