import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Contact') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ContactPage() {
  return (
    <main className="flex overflow-hidden">
      <div className="hidden flex-1 lg:block">
        <img
          alt=""
          src={'/contact-page-photo.jpg'}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex-1 py-12 lg:flex lg:h-screen lg:justify-center lg:overflow-auto">
        <div className="mx-auto max-w-lg flex-1 px-4 text-gray-600">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 space-y-5 lg:pb-12"
          >
            <div>
              <label htmlFor="fullName" className="font-medium">
                Full name
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-md border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-md border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                required
                className="mt-2 h-36 w-full resize-none appearance-none rounded-md border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-gray-800"
              />
            </div>
            <button className="w-full rounded-md bg-gray-800 p-4 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
