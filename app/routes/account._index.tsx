import { Link, MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Account') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountPage() {
  return (
    <div>
      <h1>Account</h1>
      <Link to="/account/profile">Profile</Link>
      <Link to="/account/addresses">Addresses</Link>
      <Link to="/account/orders">Order</Link>
      <Link to="/account/settings">Settings</Link>
    </div>
  );
}
