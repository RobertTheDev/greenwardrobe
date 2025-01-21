import { zodResolver } from '@hookform/resolvers/zod';
import { MetaFunction } from '@remix-run/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Contact') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

// Define Zod schema
const schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: formLoading },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="block bg-gray-50">
      <div className="grid gap-6 bg-gray-800 py-20 text-center">
        <h2 className="font-manrope text-5xl font-bold leading-tight text-white">
          Contact Us
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-300">
          Reach out to us, and we’ll get back to you as soon as possible. Your
          inquiries are our priority.
        </p>
      </div>
      <div className="mx-auto max-w-5xl -translate-y-14 px-6 sm:px-10 lg:px-16">
        <div className="rounded-2xl bg-white p-10 shadow-lg lg:p-14">
          <h3 className="font-manrope text-3xl font-semibold text-gray-800">
            Send Us a Message
          </h3>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                {...register('firstName')}
                placeholder="Enter your first name"
                className={`mt-1 w-full rounded-lg border px-4 py-3 shadow-sm ${
                  errors.firstName
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-gray-500'
                }`}
              />
              {errors.firstName && (
                <span className="text-sm text-red-500">
                  {errors.firstName?.message as string}
                </span>
              )}
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                {...register('lastName')}
                placeholder="Enter your last name"
                className={`mt-1 w-full rounded-lg border px-4 py-3 shadow-sm ${
                  errors.lastName
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-gray-500'
                }`}
              />
              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors.lastName?.message as string}
                </span>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="Enter your email"
                className={`mt-1 w-full rounded-lg border px-4 py-3 shadow-sm ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-gray-500'
                }`}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email?.message as string}
                </span>
              )}
            </div>
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                {...register('phone')}
                placeholder="Enter your phone number"
                className={`mt-1 w-full rounded-lg border px-4 py-3 shadow-sm ${
                  errors.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-gray-500'
                }`}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone?.message as string}
                </span>
              )}
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                rows={5}
                {...register('message')}
                placeholder="Write your message here..."
                className={`mt-1 w-full rounded-lg border px-4 py-3 shadow-sm ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-gray-500'
                }`}
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message?.message as string}
                </span>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={formLoading || isSubmitting}
              className={`w-full rounded-lg px-6 py-3 text-lg font-medium text-white shadow-sm transition ${
                formLoading || isSubmitting
                  ? 'cursor-not-allowed bg-gray-500'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {formLoading || isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
