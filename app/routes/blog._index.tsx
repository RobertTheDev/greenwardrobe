import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Blog') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function BlogArticlesPage() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
