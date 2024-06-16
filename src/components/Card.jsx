import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function CardWithForm({
  src,
  nameCard,
  imgStyles,
  description,
  className,
}) {
  return (
    <Card
      className={cn(
        "w-full h-auto hover:shadow-xl flex flex-col items-center justify-between gap-5 lg:p-10 p-5 transition delay-75 ease-linear cursor-pointer",
        className
      )}
    >
      <img className={imgStyles} src={src} />
      <CardTitle className="text-center">{nameCard}</CardTitle>
      <CardDescription className="text-center text-[12px] text-pretty">
        {description}
      </CardDescription>
    </Card>
  );
}
