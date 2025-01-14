import { Form, Link, useParams } from '@remix-run/react';
import { LuMenu, LuShoppingBasket, LuUser } from 'react-icons/lu';
import headerMenuLinks from './headerMenuLinks';

export default function Header() {
  const { slug } = useParams();

  const basketCount = 2;

  const signedIn = false;

  return (
    <header className="relative z-50 font-[sans-serif] tracking-wide shadow-lg">
      <section className="relative flex items-center border-b border-gray-200 bg-white px-4 py-3 max-lg:min-h-[60px] lg:min-h-[70px] lg:px-10">
        <Link to="/" className="shrink-0 max-sm:hidden">
          <img
            src="https://earthwardrobe.com/cdn/shop/files/earth_wardrobe_7.webp?v=1722342433"
            alt="logo"
            className="w-32 sm:w-[150px]"
          />
        </Link>
        <Link to="/" className="hidden max-sm:block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlhENvl9IOKwuV_hbGOd7bVJHtRfbVXPnpg&s"
            alt="logo"
            className="w-9"
          />
        </Link>

        <div className="flex w-full flex-wrap items-center">
          <Form method="get" action="/search">
            <input
              type="text"
              name="q"
              placeholder="Search something..."
              className="h-10 rounded border bg-gray-100 px-4 text-sm outline-none transition-all focus:bg-transparent max-lg:ml-4 max-lg:hidden max-md:mt-4 lg:ml-10 xl:w-80"
            />
          </Form>
          <div className="ml-auto">
            <ul className="flex items-center">
              <li className="cursor-pointer px-4 max-lg:py-2">
                <Link to="/basket">
                  <div className="relative">
                    <LuShoppingBasket className="inline size-8" />
                    {basketCount > 0 && (
                      <div className="absolute left-auto right-0 top-0 rounded-full bg-red-500 p-1 py-0 text-xs text-white">
                        <p>{basketCount}</p>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li className="flex px-4 text-[15px] hover:fill-[#007bff] hover:text-[#007bff] max-lg:py-2">
                {signedIn ? (
                  <Link to="/account">
                    <LuUser className="h-7 w-7" />
                  </Link>
                ) : (
                  <Link
                    to="/sign-in"
                    className="border border-[#333] bg-transparent px-4 py-2 text-sm font-semibold text-gray-800"
                  >
                    Sign In
                  </Link>
                )}
              </li>
              <li id="toggleOpen" className="lg:hidden">
                <button>
                  <LuMenu className="h-7 w-7" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-lg:hidden max-lg:before:fixed max-lg:before:inset-0 max-lg:before:z-50 max-lg:before:bg-black max-lg:before:opacity-50 lg:!block">
        <ul className="z-50 min-h-[46px] gap-4 bg-[#333] px-10 py-3 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px] max-lg:space-y-4 max-lg:overflow-auto max-lg:p-6 max-lg:shadow-lg lg:flex lg:flex-wrap lg:items-center lg:justify-center">
          {headerMenuLinks.map((menu) => (
            <li className="px-3 max-lg:border-b max-lg:py-3" key={menu.slug}>
              <Link
                to={`/collections/${menu.slug}`}
                className={`block ${menu.slug === slug ? 'text-yellow-300' : 'text-white'} text-[15px] font-medium hover:text-yellow-300`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
