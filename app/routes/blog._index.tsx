import { MetaFunction } from '@remix-run/react';
import BlogPostCard from '~/components/BlogPostCard';
import { blogPosts } from '~/data/blogPosts';
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
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-center text-2xl font-bold leading-10 text-black min-[400px]:text-4xl">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((props) => {
            return <BlogPostCard key={props.id} props={props} />;
          })}
        </div>
      </div>
    </div>
  );
}
