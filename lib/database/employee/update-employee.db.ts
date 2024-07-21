import {
  type Employee,
  type EmployeeSchemaType,
} from "@/lib/schema/employee.schema";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import prismaClient from "@/lib/utils/prismaClient.util";

export const updateEmployee = async (
  id: string,
  data: EmployeeSchemaType
): Promise<Employee | undefined> => {
  try {
    const employee = (await prismaClient.employee.update({
      where: { id },
      data,
    })) as Employee;

    return employee;
  } catch (error) {
    appErrorHandler(error);
  }
};
