import { AuthTabs } from './pages/auth';
import { useRoutes } from 'react-router-dom';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import SignIn from './pages/auth/SignIn/SignIn';
import ResetPassword from './pages/auth/reset-password/ResetPassword';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/SignIn',
      element: <SignIn />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ]);

  return elements;
};
