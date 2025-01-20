import { Link } from '@remix-run/react';

export default function FooterNavigationMenu({
  props,
}: {
  props: { title: string; links: { title: string; url: string }[] };
}) {
  return (
    <div className="text-left lg:mx-auto">
      <h4 className="mb-7 text-base font-semibold text-neutral-900">
        {props.title}
      </h4>
      <ul className="text-sm transition-all duration-500">
        {props.links.map((link) => {
          return (
            <li key={link.url} className="mb-6">
              <Link
                to={link.url}
                className="text-sm text-neutral-600 hover:underline"
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
