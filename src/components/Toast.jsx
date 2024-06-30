"use client";

import { Button } from "@/components/ui/button";
// import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastDemo({ title, description, nameBtn }) {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: title,
          description: description,
          //   action: (
          //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          //   ),
        });
      }}
    >
      {nameBtn}
    </Button>
  );
}
