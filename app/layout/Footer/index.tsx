import { FaGithub, FaLinkedin } from 'react-icons/fa';
import footerNavigationLinks from './footerNavigationLinks';
import FooterNavigationMenu from './FooterNavigationMenu';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-4">
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
