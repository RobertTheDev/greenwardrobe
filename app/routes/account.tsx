import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Account' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function AccountPage() {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
}
