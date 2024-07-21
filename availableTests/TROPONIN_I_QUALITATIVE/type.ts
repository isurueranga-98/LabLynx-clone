export type Type = {
  id: number;
  name: "TROPONIN I (QUALITATIVE)";
  price: number | null;
  sampleType: "BLOOD";
  results: [{ name: "Troponin I"; result: "negative" | "positive" | null }];
};
