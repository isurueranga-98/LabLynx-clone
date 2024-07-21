export type Type = {
  id: number;
  name: "FASTING PLASMA GLUCOSE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "Glucose - Fasting";
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
