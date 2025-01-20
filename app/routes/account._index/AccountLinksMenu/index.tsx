import { Link } from '@remix-run/react';
import accountLinks from './accountLinks';

export default function AccountLinksMenu() {
  return (
    <div>
      {accountLinks.map((link) => {
        return (
          <Link key={link.href} to={`/account/${link.href}`}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
