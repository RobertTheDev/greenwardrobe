import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import ContactForm from './ContactForm';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Contact') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ContactUsPage() {
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
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
