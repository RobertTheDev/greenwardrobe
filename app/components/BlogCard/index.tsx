import { Link } from '@remix-run/react';
import { IBlogPost } from '~/interfaces/BlogPost';

export default function BlogCard({ post }: { post: IBlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="overflow-hidden rounded bg-white">
        <img
          src={post.image}
          alt="Blog Post 1"
          className="h-52 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="mb-3 text-lg font-bold text-gray-800">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.description}</p>
          <p className="mt-4 text-[13px] font-semibold text-gray-800">
            {post.date}
          </p>
        </div>
      </div>
    </Link>
  );
}
