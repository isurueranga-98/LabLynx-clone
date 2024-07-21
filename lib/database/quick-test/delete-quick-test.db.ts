"use server";
import prismaClient from "@/lib/utils/prismaClient.util";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import { type QuickTest } from "@/lib/schema/quick-test.schema";

export const deleteQuickTest = async (
  id: string,
): Promise<QuickTest | undefined> => {
  try {
    const deletedQuickTest = await prismaClient.quickTest.delete({
      where: {
        id,
      },
    });

    //@ts-ignore
    return deletedQuickTest as QuickTest;
  } catch (error) {
    appErrorHandler(error);
  }
};
