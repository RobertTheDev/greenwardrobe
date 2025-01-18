import blogPosts from '../../data/blogPosts';
import BlogCard from '../BlogCard';

export default function HomeBlogSection() {
  return (
    <div className="p-4 font-[sans-serif]">
      <div className="mx-auto max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm">
        <div className="mx-auto max-w-md">
          <h2 className="mb-12 text-center text-3xl font-extrabold leading-10 text-gray-800">
            Stay updated with the latest blog posts.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 max-sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => {
            return <BlogCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
