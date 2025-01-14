import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Blog' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function BlogArticlesPage() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
