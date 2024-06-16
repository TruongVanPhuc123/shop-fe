import { AlertCircle } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive({ title }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
}
