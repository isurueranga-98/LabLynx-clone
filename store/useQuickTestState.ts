import { QuickTestPatientSchemaType } from "@/lib/schema/quick-test.schema";
import { create } from "zustand";
import { Test } from "@/lib/utils/types";

type QuickTestState = {
  patientDetails: QuickTestPatientSchemaType | undefined;
  selectedTests: Test[];
  paymentDetails:
    | {
        total: number;
        discount: number;
        totalPayble: number;
        initialPayment: number;
        balance: number;
        paymentMethod: "CASH" | "CARD" | "CHEQUE" | "ONLINE";
      }
    | undefined;
};

type QuickTestActions = {
  // patient-details actions
  setPatientDetails: (patientDetails: QuickTestPatientSchemaType) => void;
  clearPatientDetails: () => void;

  // selected-tests actions
  selectTest: (test: Test) => void;
  clearTest: (test: Test) => void;
  // clearAllTest: () => void;

  // payment-details actions
  setPaymentDetails: (paymentDetails: QuickTestState["paymentDetails"]) => void;
};

const initialState: QuickTestState = {
  patientDetails: undefined,
  selectedTests: [],
  paymentDetails: undefined,
};

const useQuickTestState = create<QuickTestState & QuickTestActions>()(
  (set) => ({
    // set initial state
    ...initialState,

    // patient-details actions
    setPatientDetails: (patientDetails) =>
      set((state) => ({ ...state, patientDetails })),
    clearPatientDetails: () =>
      set((state) => ({ ...state, patientDetails: undefined })),

    // selected-tests actions
    selectTest: (test) =>
      set((state) => {
        // check if test aleady includes in selectedTests
        const includes = state.selectedTests.find(
          (selectedTest) => selectedTest.name === test.name,
        );

        // if test already exists in the selectedTests return the unmodified state
        if (includes) return { ...state };

        return {
          ...state,
          selectedTests: [...state.selectedTests, test],
        };
      }),

    clearTest: (test) =>
      set((state) => {
        const newSelectedTests = state.selectedTests.filter(
          (selectedTest) => selectedTest.name !== test.name,
        );

        return {
          ...state,
          selectedTests: newSelectedTests,
        };
      }),

    // payment-details actions
    setPaymentDetails: (paymentDetails) =>
      set((state) => ({ ...state, paymentDetails })),
  }),
);

export default useQuickTestState;
