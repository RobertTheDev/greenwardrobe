import { MetaFunction } from '@remix-run/react';
import FaqSection from '~/components/FaqSection';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

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
    <div>
      <h1>Frequently Asked Questions</h1>
      <FaqSection />
    </div>
  );
}
