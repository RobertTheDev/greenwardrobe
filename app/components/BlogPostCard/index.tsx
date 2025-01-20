import { Link } from '@remix-run/react';
import { IBlogPost } from '~/interfaces/BlogPost';

export default function BlogPostCard({ props }: { props: IBlogPost }) {
  return (
    <Link to={`/blog/${props.slug}`}>
      <div className="flex flex-col gap-6">
        <img
          src={`/blog-posts/${props.image.src}`}
          alt={props.image.alt}
          className="h-auto w-full rounded-2xl object-cover"
        />
        <div className="block">
          <p className="mb-2.5 text-base font-medium text-gray-500">
            {props.category}
          </p>
          <h5 className="text-lg font-bold leading-8 text-gray-900">
            {props.title}
          </h5>
        </div>
      </div>
    </Link>
  );
}
