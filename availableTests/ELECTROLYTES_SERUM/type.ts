export type ELECTROLYTES_SERUM_TYPE = {
  id: number;
  name: "ELECTROLYTES - SERUM";
  price: number | null;
  sampleType: "BLOOD";
  results: [
    {
      name: "SERUM SODIUM";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      name: "SERUM POTASSIUM";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      name: "SERUM CHLORID";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
