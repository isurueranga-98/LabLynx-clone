export type Type = {
  id: number;
  name: "SGOT (AST)";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SGOT (AST)";
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
