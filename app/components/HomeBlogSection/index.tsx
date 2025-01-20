import { Link } from '@remix-run/react';
import { blogPosts } from '~/data/blogPosts';
import BlogPostCard from '../BlogPostCard';

export default function HomeBlogSection() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 flex w-full flex-col items-center justify-between max-lg:gap-6 lg:flex-row">
          <h1 className="font-manrope text-4xl font-medium text-black max-lg:text-center sm:text-5xl sm:leading-snug">
            Latest Blog
          </h1>
          <div className="flex items-center justify-end gap-5 lg:justify-end">
            <Link
              to="/blog"
              className="shadow-xs flex max-h-max cursor-pointer items-center gap-2 rounded-full bg-gray-900 py-3.5 pl-8 pr-6 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-gray-700"
            >
              Find More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 6).map((props) => {
            return <BlogPostCard key={props.id} props={props} />;
          })}
        </div>
      </div>
    </div>
  );
}
