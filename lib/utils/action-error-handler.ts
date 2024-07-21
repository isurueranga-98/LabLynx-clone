import { ActionResponse } from "@/lib/utils/types";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import { QuickTest } from "../schema/quick-test.schema";

export const actionErrorHandler = (
  error: unknown,
): ActionResponse<QuickTest> => {
  // handle data validation error
  if (error instanceof ZodError)
    return { success: false, error: error.issues[0].message };

  // handle database errors
  if (error instanceof Prisma.PrismaClientKnownRequestError)
    return { success: false, error: "prisma client known request eroor" };

  if (error instanceof Prisma.PrismaClientValidationError)
    return { success: false, error: "prisma client validation error" };

  // handle unknown errors
  console.log("Unknown error: ", error);
  return { success: false, error: "" };
};
