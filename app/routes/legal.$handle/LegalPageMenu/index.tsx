import { Link } from '@remix-run/react';
import legalPageMenuLinks from './legalPageMenuLinks';

export default function LegalPageMenu() {
  return (
    <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200">
      <ul className="tab-nav flex flex-col items-center gap-6 md:items-start lg:gap-10">
        {legalPageMenuLinks.map((link) => {
          return (
            <li key={link.title}>
              <Link
                to={link.href}
                className="text-base font-medium leading-7 text-gray-600"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
