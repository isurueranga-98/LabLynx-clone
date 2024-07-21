export type Type = {
  id: number;
  name: "SERUM CHOLESTEROL";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SERUM CHOLESTEROL";
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
