import { zodResolver } from '@hookform/resolvers/zod';
import { Link, MetaFunction } from '@remix-run/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must not exceed 20 characters'),
});

type FormInputs = z.infer<typeof signInSchema>;

import { useState } from 'react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Sign In') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex items-start justify-center bg-gray-50 p-8 lg:w-1/2 lg:p-16 dark:bg-gray-900">
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
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`mt-1 block w-full rounded-lg border p-3 text-gray-900 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  } dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-500 dark:text-gray-400"
                >
                  {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
                </button>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                Forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
            >
              Sign up
            </button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <p className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Sign in
              </p>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://earthwardrobe.com/cdn/shop/products/EA080_LS03_2018.jpg?v=1710794555"
        />
      </div>
    </div>
  );
}
