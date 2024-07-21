import { z } from "zod";

export const PatientSchema = z
  .object({
    NIC: z
      .string({
        required_error: "NIC is required",
        invalid_type_error: "NIC must be a string",
      })
      .min(1, { message: "NIC is required" }),
    name: z.object({
      firstName: z
        .string({
          required_error: "First name is required",
          invalid_type_error: "First name must be a string",
        })
        .min(1, { message: "First name is required" }),
      middleName: z.string().optional(),
      lastName: z
        .string({
          required_error: "Last name is required",
          invalid_type_error: "Last name must be a string",
        })
        .min(1, { message: "Last name is required" }),
    }),
    dob: z.date({
      required_error: "Date of birth is required",
      invalid_type_error: "Date of birth must be a date",
    }),
    gender: z.enum(["MALE", "FEMALE", "OTHER"], {
      required_error: "Gender is required",
      invalid_type_error:
        "Gender must be one of following: MALE, FEMALE, OTHER",
    }),
    address: z.object({
      street: z
        .string({
          required_error: "Street is required",
          invalid_type_error: "Street must be a string",
        })
        .min(1, { message: "Street is required" }),
      city: z
        .string({
          required_error: "City is required",
          invalid_type_error: "City must be a string",
        })
        .min(1, { message: "City is required" }),
      state: z.string().optional(),
      zip: z.string().optional(),
    }),
    phone: z
      .string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
      })
      .min(1, { message: "Phone number is required" }),
    email: z.string().email().optional(),
    type: z.enum(["ADULT", "CHILD", "SENIOR"], {
      required_error: "Type is required",
      invalid_type_error: "Type must be either ADULT or CHILD",
    }),
    guardian: z
      .object({
        type: z.enum(["MOTHER", "FATHER", "LEGAL_GUARDIAN"]),
        name: z.object({
          firstName: z.string({
            required_error: "First name is required",
            invalid_type_error: "First name must be a string",
          }),
          // .min(1, { message: "First name is required" }),
          middleName: z.string().optional(),
          lastName: z.string({
            required_error: "Last name is required",
            invalid_type_error: "Last name must be a string",
          }),
          // .min(1, { message: "Last name is required" }),
        }),
      })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "CHILD" && !data.guardian) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Guardian is required for child",
        path: ctx.path.concat("guardian"),
      });
    } else {
      return;
    }
  });

export type PatienSchemaType = z.infer<typeof PatientSchema>;
