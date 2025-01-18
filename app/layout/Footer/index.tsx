import { Link } from '@remix-run/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const footerNavigationLinks = [
  {
    title: 'Browse',
    links: [
      {
        title: 'Shop',
        url: '/',
      },
      {
        title: 'Collections',
        url: '/collections',
      },
      {
        title: 'Search',
        url: '/search',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        title: 'Contact',
        url: '/contact',
      },
      {
        title: 'FAQ',
        url: '/faq',
      },
      {
        title: 'Blog',
        url: '/blog',
      },
    ],
  },
  {
    title: 'Information',
    links: [
      {
        title: 'Returns Policy',
        url: '/legal/returns-policy',
      },
      {
        title: 'Privacy Policy',
        url: '/legal/privacy-policy',
      },
      {
        title: 'Terms & Conditions',
        url: '/legal/terms-and-conditions',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-r px-10 pb-6 pt-12 font-sans tracking-wide">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">
              {footerNavigationLinks[0].title}
            </h2>
            <ul className="space-y-3">
              {footerNavigationLinks[0].links.map((link) => {
                return (
                  <li key={link.url}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-400 transition-all hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">
              {footerNavigationLinks[1].title}
            </h2>
            <ul className="space-y-3">
              {footerNavigationLinks[1].links.map((link) => {
                return (
                  <li key={link.url}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-400 transition-all hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">
              {footerNavigationLinks[2].title}
            </h2>
            <ul className="space-y-3">
              {footerNavigationLinks[2].links.map((link) => {
                return (
                  <li key={link.url}>
                    <Link
                      to={link.url}
                      className="text-sm text-gray-400 transition-all hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center max-sm:-order-1 lg:justify-center">
            <Link to="/">
              <img
                src="/desktop-logo.jpg"
                alt="logo"
                className="w-40 sm:w-56"
              />
            </Link>
          </div>
        </div>
        <hr className="mb-6 mt-12 border-gray-600" />
        <div className="flex flex-wrap gap-6 sm:justify-between">
          <div className="flex space-x-5">
            <a
              href="https://www.github.com/robertthedev"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 transition-all hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/robertthedev"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 transition-all hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © Green Wardrobe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
