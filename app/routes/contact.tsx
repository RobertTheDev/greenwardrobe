import { MetaFunction } from '@remix-run/react';
import ContactForm from '~/components/ContactForm';
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

export default function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
}
