import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Account Settings' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function AccountSettingsPage() {
  return (
    <div>
      <h1>AccountSettings</h1>
    </div>
  );
}
