import { Link } from '@remix-run/react';
import { LuCircleUser, LuSearch, LuShoppingBasket } from 'react-icons/lu';
import collections from '~/data/collections';

export default function Header() {
  const signedIn = true;

  return (
    <header className="sticky top-0 z-[99] flex min-h-16 border-b bg-white px-4 py-3 font-[sans-serif] tracking-wide sm:px-6">
      <div className="mx-auto flex w-full max-w-screen-xl">
        <div className="flex w-full flex-wrap items-center gap-4 lg:gap-y-2">
          <Link to="/">
            <img
              src="/desktop-logo.jpg"
              alt="logo"
              className="w-56 max-sm:hidden"
            />
            <img
              src="/mobile-logo.jpg"
              alt="logo"
              className="hidden w-11 rounded-full max-sm:block"
            />
          </Link>
          <div className="max-lg:hidden max-lg:before:fixed max-lg:before:inset-0 max-lg:before:z-50 max-lg:before:bg-black max-lg:before:opacity-50 lg:ml-6 lg:!block">
            <ul className="z-50 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px] max-lg:space-y-3 max-lg:overflow-auto max-lg:bg-white max-lg:p-6 max-lg:shadow-md lg:flex lg:gap-x-3">
              {collections.map((collection) => {
                return (
                  <li
                    key={collection.id}
                    className="px-3 max-lg:border-b max-lg:py-3"
                  >
                    <Link
                      to={`/collections/${collection.slug}`}
                      className="block text-[15px] font-semibold text-neutral-900 hover:text-[#007bff]"
                    >
                      {collection.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ml-auto flex items-center gap-x-6 gap-y-4">
            <form
              method="get"
              action="/search"
              className="flex max-w-52 overflow-hidden rounded-full border border-black bg-gray-50 px-4 py-2.5 focus-within:border-gray-400 focus-within:bg-transparent max-lg:hidden"
            >
              <input
                type="text"
                name="q"
                placeholder="Search something..."
                className="w-full bg-transparent pr-2 text-sm outline-none"
              />
              <button type="submit">
                <LuSearch size={20} />
              </button>
            </form>
            <div className="flex items-center space-x-6 sm:space-x-8">
              <button id="toggleOpen" className="lg:hidden">
                <LuSearch size={28} />
              </button>
              <Link
                to="/basket"
                className="flex cursor-pointer flex-col items-center justify-center gap-0.5"
              >
                <div className="relative">
                  <LuShoppingBasket size={28} />
                  <span className="absolute right-0 top-0 -mr-1 -mt-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    2
                  </span>
                </div>
              </Link>
              <Link to={signedIn ? '/account' : '/sign-in'}>
                <LuCircleUser size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
