import prismaClient from "@/lib/utils/prismaClient.util";
import { type Employee } from "@/lib/schema/employee.schema";
import appErrorHandler from "@/lib/utils/AppErrorHandler";

export const readEmployees = async (): Promise<Employee[] | undefined> => {
  try {
    const employees = (await prismaClient.employee.findMany()) as Employee[];
    console.log(employees);

    return employees;
  } catch (error) {
    appErrorHandler(error);
  }
};
