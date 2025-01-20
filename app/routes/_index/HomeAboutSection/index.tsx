import { Link } from '@remix-run/react';

export default function HomeAboutSection() {
  return (
    <section className="relative bg-neutral-100 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start">
            <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start">
              <h2 className="font-manrope text-center text-4xl font-bold leading-normal text-gray-900 lg:text-start">
                About our Mission
              </h2>
              <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                Should the sustainable choice come at a premium? We don&#39;t
                think so.
              </p>
            </div>
            <Link
              to="/about"
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit"
            >
              <span className="px-1.5 text-sm font-medium leading-6 text-white">
                Read more
              </span>
            </Link>
          </div>
          <img
            className="mx-auto h-full rounded-3xl object-cover lg:mx-0"
            src="https://earthwardrobe.com/cdn/shop/files/ewhero2.jpg?v=1709751107&width=1280"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
