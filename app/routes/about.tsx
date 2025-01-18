import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('About') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
    </main>
  );
}
