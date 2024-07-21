import prismaClient from "@/lib/utils/prismaClient.util";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import {
  type QuickTest,
  type QuickTestSchemaType,
} from "@/lib/schema/quick-test.schema";

export const createQuickTest = async (
  quickTest: QuickTestSchemaType,
): Promise<QuickTest | undefined> => {
  try {
    console.log(quickTest);

    //@ts-ignore
    const newQuickTest = (await prismaClient.quickTest.create({
      //@ts-ignore
      data: quickTest,
    })) as QuickTest;
    return newQuickTest;
  } catch (error: unknown) {
    appErrorHandler(error);
  }
};
