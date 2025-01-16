import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Collections') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function CollectionsPage() {
  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
}
