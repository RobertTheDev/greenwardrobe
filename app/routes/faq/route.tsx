import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import FaqGroup from './FaqGroup';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Frequently Asked Questions') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function FaqComponent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:justify-between xl:gap-24">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h6 className="mb-1 text-center text-base font-medium uppercase text-indigo-600 lg:text-left">
                MOST ASKED QUESTIONS
              </h6>
              <h2 className="mb-4 text-center text-4xl font-bold leading-[3.25rem] text-gray-900 lg:text-left">
                FAQs
              </h2>
              <p className="mb-7 text-center text-gray-500 lg:text-left">
                Trusted In More Than 100 Countries And 5 Million Customers.
                Transact Easily And Quickly With Just One Click.
              </p>
              <img
                src="https://pagedone.io/asset/uploads/1696231386.png"
                alt="Faq tailwind section"
                className="mx-auto rounded-2xl object-cover lg:mx-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <FaqGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
