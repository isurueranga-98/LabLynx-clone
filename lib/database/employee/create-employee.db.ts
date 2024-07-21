import prismaClient from "@/lib/utils/prismaClient.util";
import {
  type Employee,
  type EmployeeSchemaType,
} from "@/lib/schema/employee.schema";
import appErrorHandler from "@/lib/utils/AppErrorHandler";

export const createEmployee = async (
  employee: EmployeeSchemaType
): Promise<Employee | undefined> => {
  try {
    const newEmployee = (await prismaClient.employee.create({
      data: employee,
    })) as Employee;
    return newEmployee;
  } catch (error: unknown) {
    appErrorHandler(error);
  }
};
