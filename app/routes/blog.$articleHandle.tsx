import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Blog Article' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function BlogArticlePage() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
