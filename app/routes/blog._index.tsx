import { MetaFunction } from '@remix-run/react';
import BlogCard from '~/components/BlogCard';
import blogPosts from '~/data/blogPosts';
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
    <div className="p-4 font-[sans-serif]">
      <div className="mx-auto max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm">
        <div className="mx-auto max-w-md">
          <h2 className="mb-12 text-center text-3xl font-extrabold leading-10 text-gray-800">
            Stay updated with the latest blog posts.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 max-sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            return <BlogCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
