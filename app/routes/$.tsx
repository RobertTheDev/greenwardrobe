import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Not Found') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function NotFoundPage() {
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
