import { MetaFunction } from '@remix-run/react';

import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import AuthForm from './AuthForm';

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
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex items-start justify-center bg-gray-50 p-8 lg:w-1/2 lg:p-16 dark:bg-gray-900">
        <AuthForm />
      </div>
      <div className="hidden bg-cover bg-center lg:block lg:w-1/2">
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://earthwardrobe.com/cdn/shop/products/EA080_LS03_2018.jpg?v=1710794555"
        />
      </div>
    </main>
  );
}
