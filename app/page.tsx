import { Form, EXAMPLES } from "@availableTests/ELECTROLYTES_SERUM";
import { PageContainer } from "@/components/layout/page-container.layout";

const HomePage = (): JSX.Element => {
  return (
    <PageContainer>
      <h1 className="hidden">Home</h1>
      {/* <Form {...EXAMPLES.configured} /> */}
      <Form {...EXAMPLES.notConfigured} />
    </PageContainer>
  );
};

export default HomePage;
