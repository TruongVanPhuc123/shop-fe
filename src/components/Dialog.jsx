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

export function Dialog({
  trigger,
  variant,
  btnStyles,
  title,
  description,
  action,
  footer,
}) {
  return (
    <AlertDialog className="w-[500px] ">
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
          </AlertDialogDescription>
        </AlertDialogHeader>
        {footer && (
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={action}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
