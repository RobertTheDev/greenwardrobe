import { MetaFunction } from '@remix-run/react';
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
    </div>
  );
}

// /// contact form / contact details / contact us / contact support / contact sales
