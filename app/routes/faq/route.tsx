import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import AccordionCard from './AccordionCard';
import faqs from './faqs';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Frequently Asked Questions') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function FaqPage() {
  return (
    <main className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h6 className="mb-5 text-center font-medium text-gray-500">
            Most asked questions
          </h6>
          <h2 className="font-manrope text-center text-4xl font-bold leading-[3.25rem] text-gray-900">
            Questions & Answers
          </h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 rounded-2xl bg-white md:max-w-3xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-2 xl:max-w-full">
          {faqs.map((faq) => {
            return <AccordionCard faq={faq} key={faq.id} />;
          })}
        </div>
      </div>
    </main>
  );
}
