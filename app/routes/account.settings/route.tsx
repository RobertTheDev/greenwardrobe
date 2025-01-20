import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Account Settings') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AccountSettingsPage() {
  return (
    <div>
      <h1>Account Settings</h1>
    </div>
  );
}
