"use server";
import {
  EmployeeSchema,
  type EmployeeSchemaType,
  type Employee,
} from "@/lib/schema/employee.schema";
import { createEmployee } from "@/lib/database/employee/create-employee.db";
import { revalidatePath } from "next/cache";
import AppError from "@/lib/utils/AppError";
import { ActionResponse } from "@/lib/utils/types";

export const createEmployeeAction = async (
  employee: EmployeeSchemaType
): Promise<ActionResponse<Employee>> => {
  try {
    // validate the user payload
    const validatedEmployee = EmployeeSchema.safeParse(employee);

    // if user validation failed, return an error
    if (!validatedEmployee.success) {
      return { success: false, error: "schema validation failed" };
    }

    // if user validation success, create the user in the database
    const newUser = await createEmployee(validatedEmployee.data);

    // if user creation failed, return an error
    if (!newUser) {
      return { success: false, error: "unexpected error" };
    }

    // if user creation success,

    // revalidate the cache
    revalidatePath("/employees");

    //return the user
    return { success: true, data: newUser };
  } catch (error) {
    if (error instanceof AppError) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "unexpected error" };
    }
  }
};
