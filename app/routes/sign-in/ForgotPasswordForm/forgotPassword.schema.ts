import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
