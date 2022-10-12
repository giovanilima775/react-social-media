import { LoginPage, NotFoundPage, ProfilePage } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const unauthorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile/:username',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
]);
