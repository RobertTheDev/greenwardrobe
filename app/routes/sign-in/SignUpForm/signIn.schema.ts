import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
