"use server";
import { revalidatePath } from "next/cache";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import { QuickTest, QuickTestSchemaType } from "@/lib/schema/quick-test.schema";
import { createQuickTest } from "@/lib/database/quick-test/create-quick-test.db";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";

export const createQuickTestAction = async (
  quickTest: QuickTestSchemaType,
): Promise<ActionResponse<QuickTest>> => {
  try {
    // validate the quick-test payload
    // const validatedQuickTest = EmployeeSchema.safeParse(quickTest);

    // if quick-test validation failed, return an error
    // if (!validatedQuickTest.success) {
    //   return { success: false, error: "schema validation failed" };
    // }

    // if quick-test validation success, create the user in the database
    const newQuickTest = await createQuickTest(quickTest);

    // if quick-test creation failed, return an error
    if (!newQuickTest) {
      return { success: false, error: "unexpected error" };
    }

    // if quick-test creation success,

    // revalidate the cache
    revalidatePath("/quick-tests");

    //return the quick-test
    return { success: true, data: newQuickTest };
  } catch (error) {
    return actionErrorHandler(error);
  }
};
