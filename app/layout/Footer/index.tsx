import { FaGithub, FaLinkedin } from 'react-icons/fa';
import footerNavigationLinks from './footerNavigationLinks';
import FooterNavigationMenu from './FooterNavigationMenu';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://pagedone.io/"
              className="flex justify-center lg:justify-start"
            >
              <img
                src="/desktop-logo.jpg"
                alt="Pagedone"
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-6 text-center text-sm text-gray-500 lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any
              query ?
            </p>
          </div>

          {footerNavigationLinks.map((props) => {
            return <FooterNavigationMenu key={props.title} props={props} />;
          })}
        </div>

        <div className="border-t border-gray-200 py-5">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Green Wardrobe, All rights reserved.
            </span>
            <div className="mt-4 flex space-x-2 sm:justify-center lg:mt-0">
              <a
                href="https://www.github.com/robertthedev"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500"
                rel="noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/robertthedev"
                target="_blank"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500"
                rel="noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
