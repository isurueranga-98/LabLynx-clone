"use client";
import { FC, ReactNode, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type FormSubmitProps = {
  children: ReactNode;
};

const FormSubmit: FC<FormSubmitProps> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {children}
    </Button>
  );
};

export default FormSubmit;
