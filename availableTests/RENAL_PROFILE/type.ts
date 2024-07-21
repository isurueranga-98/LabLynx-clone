export type Type = {
  id: number;
  name: "RENAL PROFILE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "BLOOD UREA";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "SERUM CREATININE";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "SERUM SODIUM";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "SERUM POTASSIUM";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "SERUM - CHLORIDE";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "TOTAL - CALCIUM";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "INORGANIC PHOSPHORUS";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "URIC ACID";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
  ];
};
