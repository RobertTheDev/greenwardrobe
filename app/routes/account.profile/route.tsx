import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Profile') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountProfilePage() {
  return (
    <div>
      <h1>Account Profile</h1>
    </div>
  );
}
