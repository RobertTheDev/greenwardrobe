import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Sign In') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
    </div>
  );
}
