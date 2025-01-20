import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@remix-run/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from './forgotPassword.schema';

export default function ForgotPasswordForm({
  toggleFormType,
}: {
  toggleFormType: (type: 'sign-in' | 'sign-up') => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="flex flex-col items-center justify-center">
        <Link
          to="/"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="size-12 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
            <img
              className="h-full w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlhENvl9IOKwuV_hbGOd7bVJHtRfbVXPnpg&s"
              alt="logo"
            />
          </div>
        </Link>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Welcome to Green Wardrobe
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Enter your email and password to continue
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            name="email"
            id="email"
            className={`mt-1 block w-full rounded-lg border p-3 text-gray-900 focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            } dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
        >
          Send Password Reset
        </button>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <button
            onClick={() => toggleFormType('sign-in')}
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
}
