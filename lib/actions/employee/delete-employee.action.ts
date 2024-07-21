"use server";
import { deleteEmployee } from "@/lib/database/employee/delete-employee.db";
import { type Employee } from "@/lib/schema/employee.schema";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";

export const deleteEmployeeAction = async (
  id: string
): Promise<ActionResponse<Employee>> => {
  try {
    // delete the user from the database
    const deletedUser = await deleteEmployee(id);

    // if user deletion failed, return an error
    if (!deletedUser) {
      return { success: false, error: "unexpected error" };
    }

    // if user deletion success,

    // revalidate the cache
    revalidatePath("/users");

    //return the user
    return { success: true, data: deletedUser };
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
