import { z } from "zod";

export const QuickTestPatientSchema = z.object({
  title: z.enum(["MR", "MS", "MRS", "MISS"]),
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z.object({
    years: z.string().min(0, { message: "Age is required" }),
    months: z.string().min(0).max(11),
    days: z.string().min(0).max(30),
  }),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    message: "Gender is required",
  }),
  phone: z.string().optional(),
  email: z.string().optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
  }),
  referredBy: z.string().default("SELF REQUEST"),
});

export const QuickTestSelectedTestsSchema = z.any();

export const QuickTestPaymentSchema = z.object({});

export const QuickTestSchema = z.object({
  patientDetails: QuickTestPatientSchema,
  selectedTests: z.any(),
  paymentDetails: QuickTestPaymentSchema,
});

export type QuickTestPatientSchemaType = z.infer<typeof QuickTestPatientSchema>;

export type QuickTestSchemaType = {
  patientDetails: QuickTestPatientSchemaType;
  selectedTests: any[];
  paymentDetails: {
    total: number;
    discount: number;
    totalPayble: number;
    initialPayment: number;
    balance: number;
    paymentMethod: "cash" | "card";
  };
};

export type QuickTest = { id: string } & QuickTestSchemaType;
