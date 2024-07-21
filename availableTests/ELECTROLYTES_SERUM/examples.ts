import { ELECTROLYTES_SERUM_TYPE } from "@availableTests/ELECTROLYTES_SERUM/type";

type ELECTROLYTES_SERUM_EXAMPLES = {
  configured: ELECTROLYTES_SERUM_TYPE;
  notConfigured: ELECTROLYTES_SERUM_TYPE;
};

export const EXAMPLES: ELECTROLYTES_SERUM_EXAMPLES = {
  configured: {
    id: 1,
    name: "ELECTROLYTES - SERUM",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM SODIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
      {
        name: "SERUM POTASSIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 3,
          high: 5,
        },
      },
      {
        name: "SERUM CHLORID",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 4,
          high: 8,
        },
      },
    ],
  },
  notConfigured: {
    id: 1,
    name: "ELECTROLYTES - SERUM",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM SODIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM POTASSIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM CHLORID",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};