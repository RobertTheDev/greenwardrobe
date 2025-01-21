import { Link } from '@remix-run/react';
import { blogPosts } from '~/data/blogPosts';
import BlogPostCard from './BlogPostCard';

export default function HomeBlogSection() {
  return (
    <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
        <h1 className="text-4xl font-semibold text-black max-lg:text-center sm:text-5xl sm:leading-snug">
          Latest Blog
        </h1>
        <div className="flex items-center justify-end gap-5 lg:justify-end">
          <Link
            to="/blog"
            className="shadow-xs flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-gray-900 py-3.5 pl-8 pr-6 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-gray-700"
          >
            Find More
          </Link>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 6).map((props) => {
          return <BlogPostCard key={props.id} props={props} />;
        })}
      </div>
    </div>
  );
}
