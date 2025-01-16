import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Collection') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function CollectionPage() {
  return (
    <div>
      <h1>Collection</h1>
    </div>
  );
}
