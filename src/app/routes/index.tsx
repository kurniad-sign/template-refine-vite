import { useMemo } from 'react';
import { RouterProvider } from 'react-router';

import { createAppRouter } from './router';

export function AppRoutes() {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
}
