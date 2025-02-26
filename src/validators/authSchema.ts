import { z } from 'zod';

const emaildesc = "Name must be 3 character long";

export const signupSchema = z.object({
  firstname: z.string().min(3,emaildesc).max(50),
  lastname: z.string().min(3,emaildesc).max(50),
  contact_No: z.number().int().positive("Invalid contact number"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6,"Password must be atleast 6 characters long"),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
}).strict(); // Using .strict() to enforce only defined keys are accepted
