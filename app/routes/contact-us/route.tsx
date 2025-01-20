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
    <section className="block">
      <div className="grid gap-4 bg-gray-900 py-32">
        <h2 className="font-manrope text-center text-4xl font-bold leading-snug text-white">
          CONTACT US
        </h2>
        <p className="mx-auto max-w-2xl text-center text-base font-normal text-gray-200">
          The assurance of a prompt response, and we will get back to you as
          soon as possible, underscores attentiveness and commitment to
          addressing inquiries.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
