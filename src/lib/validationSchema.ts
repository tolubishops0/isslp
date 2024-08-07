import { z } from "zod";

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, "username is required")
      .min(2, "username must be at least 2 characters")
      .max(50, "username cannot be longer than 50 characters"),
    // .regex(/^[a-zA-Z\s]*$/, "userame can only contain letters and spaces")
    email: z.string().min(1, "email is required").email("Invalid email format"),
    password: z
      .string()
      .min(1, "password is required")
      .min(8, "password must be at least 8 characters")
      .regex(/[a-zA-Z]/, "password must contain at least one letter")
      .regex(/\d/, "password must contain at least one number")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/,
        "password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "password is required"),

    terms: z.literal(true, {
      errorMap: () => ({ message: "you must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "username is required")
    .min(2, "username must be at least 2 characters")
    .max(50, "username cannot be longer than 50 characters"),
  // .regex(/^[a-zA-Z\s]*$/, "userame can only contain letters and spaces")

  password: z
    .string()
    .min(1, "password is required")
    .min(8, "assword must be at least 8 characters")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/\d/, "password must contain at least one number")
    .regex(
      /[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/,
      "password must contain at least one special character"
    ),
});
