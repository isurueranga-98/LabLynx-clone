"use server";
import { deleteQuickTest } from "@/lib/database/quick-test/delete-quick-test.db";
import { QuickTest } from "@/lib/schema/quick-test.schema";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";

export const deleteQuickTestAction = async (
  id: string,
): Promise<ActionResponse<QuickTest | undefined>> => {
  try {
    // delete the user from the database
    const deletedQuickTest = await deleteQuickTest(id);

    // if user deletion failed, return an error
    if (!deletedQuickTest) {
      return { success: false, error: "unexpected error" };
    }

    // if user deletion success,

    // revalidate the cache
    revalidatePath("/tests");

    //return the user
    //@ts-ignore
    return { success: true, data: deleteQuickTest };
  } catch (error) {
    if (error instanceof AppError) {
      // if the error is an instance of AppError, return the error message
      return { success: false, error: error.message };
    } else {
      // if the error is not an instance of AppError, return an unexpected error message
      return { success: false, error: "unexpected error" };
    }
  }
};
