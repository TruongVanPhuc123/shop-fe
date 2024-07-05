import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Typography from "./Typography";

export function Dialog({
  trigger,
  variant,
  btnStyles,
  title,
  description,
  quantity,
  action,
  handleChange,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={`${variant}`} className={`${btnStyles}`}>
          {trigger}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description && description}
            {quantity >= 0 && (
              <Typography className={"flex items-center gap-3"}>
                Quantity:
                <Input
                  className="w-full text-center"
                  type="number"
                  value={quantity}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </Typography>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={action}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
