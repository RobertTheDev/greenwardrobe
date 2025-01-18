import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Policy') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ShopLegalPage() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        <div className="absolute inset-0">
          <img
            src="https://readymadeui.com/cardImg.webp"
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-8 text-center text-white">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Welcome to Our Premium Service
          </h1>
        </div>
      </div>
    </div>
  );
}
