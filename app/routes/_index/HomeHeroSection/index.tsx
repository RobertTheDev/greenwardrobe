import { Link } from '@remix-run/react';

export default function HomeHeroSection() {
  return (
    <div className="relative h-screen w-full bg-[url('https://livinglightlyinireland.com/wp-content/uploads/2024/03/globe-hope.jpg?w=1024')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-45"></div>
      <section className="relative w-full lg:pt-[84px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex w-full flex-col items-start justify-start gap-10 pb-24 pt-8 lg:gap-14 lg:pb-36 lg:pt-20">
            <div className="flex w-full flex-col items-center justify-start gap-8 lg:items-start lg:gap-10">
              <div className="flex w-full flex-col items-center justify-start gap-5 lg:items-start">
                <h2 className="font-manrope w-full text-center text-5xl font-bold leading-normal text-white md:text-7xl md:leading-snug lg:max-w-xl lg:text-start">
                  Sustainable Clothing For Everyone
                </h2>
              </div>
            </div>
            <Link
              to="/shop"
              className="mx-auto flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-700 sm:w-fit lg:ml-0"
            >
              <span className="px-2 py-px text-base font-semibold leading-relaxed text-white">
                Shop Now
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
