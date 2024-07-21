export type Type = {
  id: number;
  name: "SERUM CREATININE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
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
      name: "Estimated GFR CKD - EPI";
      result: number | null;
      unit: "mL/min/1.73m2";
    },
  ];
};
