import { PageContainer } from "@/components/layout/page-container.layout";
import { CRP } from "@/components/result-forms/CRP";
import { ELECTROLYTES_SERUM } from "@/components/result-forms/ELECTROLYTES-SERUM";
import { ERYTHROCYTE_SEDIMENTATION_RATE } from "@/components/result-forms/ERYTHROCYTE-SEDIMENTATION-RATE";
import { FASTING_PLASMA_GLUCOSE } from "@/components/result-forms/FASTING-PLASMA-GLUCOSE";
import { FULL_BLOOD_COUNT } from "@/components/result-forms/FULL-BLOOD-COUNT";
import { HEMOGLOBIN } from "@/components/result-forms/HEMOGLOBIN";
import { LIPID_PROFILE } from "@/components/result-forms/LIPID-PROFILE";
import { SERUM_CHOLESTEROL } from "@/components/result-forms/SERUM-CHOLESTEROL";
import { SERUM_CREATININE } from "@/components/result-forms/SERUM-CREATININE";
import { SGOT } from "@/components/result-forms/SGOT";
import { SGOTSGPT } from "@/components/result-forms/SGOT-SGPT";
import { TROPNIN } from "@/components/result-forms/TROPNIN";
import { URINE_FULL_REPORT } from "@/components/result-forms/URINE-FULL-REPORT";
import { URINE_PREGNANCY } from "@/components/result-forms/URINE-PREGNANCY";

const TestFormPage = () => {
  return (
    <PageContainer>
      <FULL_BLOOD_COUNT />
    </PageContainer>
  );
};

export default TestFormPage;
