export type Type = {
  id: number;
  name: "SGPT (ALT)";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SGPT (ALT)";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "U/L";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
  ];
};