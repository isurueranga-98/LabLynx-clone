import prismaClient from "@/lib/utils/prismaClient.util";
import appErrorHandler from "@/lib/utils/AppErrorHandler";
import { QuickTest } from "@/lib/schema/quick-test.schema";

export const readQuickTests = async (): Promise<QuickTest[] | undefined> => {
  try {
    //@ts-ignore
    const tests = (await prismaClient.quickTest.findMany()) as QuickTest[];

    return tests;
  } catch (error) {
    appErrorHandler(error);
  }
};
