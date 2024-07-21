import prismaClient from "@/lib/utils/prismaClient.util";
import { type Employee } from "@/lib/schema/employee.schema";
import appErrorHandler from "@/lib/utils/AppErrorHandler";

export const deleteEmployee = async (
  id: string
): Promise<Employee | undefined> => {
  try {
    const deletedEmployee = await prismaClient.employee.delete({
      where: {
        id,
      },
    });

    return deletedEmployee as Employee;
  } catch (error) {
    appErrorHandler(error);
  }
};
