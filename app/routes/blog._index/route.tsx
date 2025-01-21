import { MetaFunction } from '@remix-run/react';
import { blogPosts } from '~/data/blogPosts';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import BlogPostCard from './BlogPostCard';

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
    <main className="px-6 py-14 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-manrope text-2xl font-bold leading-10 text-black min-[400px]:text-4xl">
          Latest Blog
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((props) => {
            return <BlogPostCard key={props.id} props={props} />;
          })}
        </div>
      </div>
    </main>
  );
}
