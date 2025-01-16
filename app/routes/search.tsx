import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Search') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function SearchPage() {
  return (
    <div>
      <h1>Search </h1>
    </div>
  );
}
