/**
 * This is return type for server actions
 */
export type ActionResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

export type FilterByValue = {
  columnId: string;
  columnName: string;
};

/**
 * Patient type
 */
export type Patient = {
  id: string;
  NIC: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dob: Date;
  gender: "MALE" | "FEMALE" | "OTHER";
  address: {
    street: string;
    city: string;
    state?: string;
    zip?: string;
  };
  phone: string;
  email?: string;
} & (
  | {
      type: "ADULT";
    }
  | {
      type: "CHILD" | "SENIOR";
      guardian: {
        type: "MOTHER" | "FATHER" | "LEGAL_GUARDIAN";
        name: {
          firstName: string;
          middleName?: string;
          lastName: string;
        };
      };
    }
);

/**
 * Props type for forms in the app
 */
export type FormProps<T> = {
  onSubmit: (formObject: Omit<T, "id">) => Promise<void>;
} & (
  | {
      type: "create";
    }
  | {
      type: "read" | "update" | "delete";
      formObject: T;
    }
);

export type QuickTestStep =
  | "PATIENT_DETAILS"
  | "SELECT_TESTS"
  | "PAYMENT"
  | "RECEIPT";

/**
 * Shape of Test object
 */

// define result types of tests

// // ELECTROLYTES_SERUM
// export type RESULTS_ELECTROLYTES_SERUM = [
//   {
//     name: "SERUM SODIUM";
//   },
//   { name: "SERUM POTASSIUM" },
//   { name: "SERUM CHLORID" },
// ];

// //TROPONIN I (QUALITATIVE)
// export type RESULTS_TROPONIN_I_QUALITATIVE = [{ name: "Troponin I" }];

// // LIPID_PROFILE
// export type RESULTS_LIPID_PROFILE = [
//   { name: "TOTAL CHOLESTEROL" },
//   { name: "SERUM TRIGLYCERIDES" },
//   { name: "H.D.L." },
//   { name: "L.D.L." },
//   { name: "V.L.D.L." },
//   { name: "CHOLESTEROL / HDL" },
//   { name: "LDL/ HDL" },
// ];

// // RENAL PROFILE
// export type RESULTS_RENAL_PROFILE = [];

// export type Test = {
//   id: number;
//   price: number;
//   sampleType: "BLOOD" | "URINE";
// } & (
//   | {
//       name: "ELECTROLYTES - SERUM";
//       results: RESULTS_ELECTROLYTES_SERUM;
//     }
//   | {
//       name: "TROPONIN I (QUALITATIVE)";
//       results: RESULTS_TROPONIN_I_QUALITATIVE;
//     }
//   | { name: "RENAL PROFILE"; results: RESULTS_RENAL_PROFILE }
//   | { name: "SGOT & SGPT (AST & ALT)"; results: [] }
//   | { name: "SGOT (AST)"; results: [] }
//   | { name: "SGPT (ALT)"; results: [] }
//   | { name: "SERUM CREATININE"; results: [] }
//   | { name: "SERUM CHOLESTEROL"; results: [] }
//   | { name: "FASTING PLASMA GLUCOSE"; results: [] }
//   | { name: "HEMOGLOBIN(HB)"; results: [] }
//   | {
//       name: "LIPID PROFILE";
//       results: RESULTS_LIPID_PROFILE;
//     }
//   | { name: "URINE FULL REPORT"; results: [] }
//   | { name: "FULL BLOOD COUNT"; results: [] }
//   | { name: "URINE PREGNANCY"; results: [] }
//   | { name: "C REACTIVE PROTENE(CRP)"; results: [] }
//   | { name: "ERYTHROCYTE SEDIMENTATION RATE (ESR)"; results: [] }
// );

export type QuickTest = {};
