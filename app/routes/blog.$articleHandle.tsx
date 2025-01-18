import { MetaFunction, useParams } from '@remix-run/react';
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

export default function BlogArticlePage() {
  const params = useParams();

  const blogPost = blogPosts.find((post) => post.slug === params.articleHandle);

  if (!blogPost) {
    return (
      <div>
        <p>Not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-52 font-[sans-serif]">
        <div className="absolute inset-0">
          <img
            src={blogPost.image}
            alt=""
            className="h-full w-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-8 text-center text-white">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {blogPost.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
