"use client";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import { PageContainer } from "@/components/layout/page-container.layout";
import { Test } from "@/types/tests";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EnterResultsPage = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const receipt = qs.parse(query) as any;

  // console.log(receipt.selectedTests);

  return (
    <PageContainer>
      <div></div>
      <div>
        {receipt.selectedTests.map((test: Test) => (
          <Accordion type="single" collapsible key={test.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{test.name}</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </PageContainer>
  );
};

export default EnterResultsPage;
