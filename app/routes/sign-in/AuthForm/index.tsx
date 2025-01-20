import { useState } from 'react';
import ForgotPasswordForm from '../ForgotPasswordForm';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

export default function AuthForm() {
  const [formType, setFormType] = useState<
    'sign-in' | 'sign-up' | 'forgot-password'
  >('sign-in');

  function toggleFormType(type: 'sign-in' | 'sign-up' | 'forgot-password') {
    setFormType(type);
  }

  return (
    <div>
      {formType === 'forgot-password' && (
        <ForgotPasswordForm toggleFormType={toggleFormType} />
      )}
      {formType === 'sign-in' && <SignInForm toggleFormType={toggleFormType} />}
      {formType === 'sign-up' && <SignUpForm toggleFormType={toggleFormType} />}
    </div>
  );
}
