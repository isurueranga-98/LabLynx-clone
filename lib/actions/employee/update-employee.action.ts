"use server";
import AppError from "@/lib/utils/AppError";
import {
  type Employee,
  type EmployeeSchemaType,
} from "@/lib/schema/employee.schema";
import { updateEmployee } from "@/lib/database/employee/update-employee.db";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";

export const updateEmployeeAction = async (
  id: string,
  data: EmployeeSchemaType
): Promise<ActionResponse<Employee>> => {
  try {
    // update the user in the database
    const updatedUser = await updateEmployee(id, data);

    console.log(updatedUser);

    // if user update failed, return an error
    if (!updatedUser) {
      return { success: false, error: "unexpected error" };
    }

    // if user update success,

    // revaidate the cache
    revalidatePath("/users");

    // return the user
    return { success: true, data: updatedUser };
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "unexpected error" };
    }
  }
};
