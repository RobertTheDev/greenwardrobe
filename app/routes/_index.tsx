import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle() },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
