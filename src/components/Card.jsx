import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export function CardWithForm() {
  return (
    <Card className="lg:w-[350px] w-[150px]  shadow-xl">
      <div className="flex flex-col items-center lg:p-10 p-4 gap-5">
        <img width={"50%"} src="../../public/body/Shiny Happy - Plants 3.png" />
        <CardTitle className="text-center">Clothes</CardTitle>
        <CardDescription className="text-center text-[12px] text-pretty">
          At One Theory, our mission is to help you live purposefully,
          peacefully, and unapologetically one day at a time
        </CardDescription>
      </div>
    </Card>
  );
}
