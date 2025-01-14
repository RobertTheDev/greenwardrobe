import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sign In' },
    { name: 'description', content: 'Welcome to Home!' },
  ];
};

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
}
