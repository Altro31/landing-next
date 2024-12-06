import { z } from "zod";

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const registerSchema = z.object({
  name: z.string().min(1, "register.form.name-error"),
  email: z.string().email(),
  phone: z.string().optional(),
  enterprise: z.string().min(1, "register.form.company-error"),
  motive: z.string().min(1, "register.form.reason-error"),
  comment: z.string().optional(),
});
