import { createBrowserRouter } from 'react-router';

import { ROUTE_URL } from '@/config/url';

import { NotFoundRoute } from './not-found';
import { RefineProviderRouter } from './refine';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      Component: RefineProviderRouter,
      children: [
        {
          path: ROUTE_URL.app.categories.default.path,
          children: [
            {
              index: true,
              async lazy() {
                const { CategoryList } = await import(
                  '../pages/categories/list'
                );
                return { Component: CategoryList };
              },
            },
            {
              path: 'show/:id',
              async lazy() {
                const { CategoryShow } = await import(
                  '../pages/categories/show'
                );
                return { Component: CategoryShow };
              },
            },
            {
              path: 'create',
              async lazy() {
                const { CategoryCreate } = await import(
                  '../pages/categories/create'
                );
                return { Component: CategoryCreate };
              },
            },
            {
              path: 'edit/:id',
              async lazy() {
                const { CategoryEdit } = await import(
                  '../pages/categories/edit'
                );
                return { Component: CategoryEdit };
              },
            },
          ],
        },
        {
          path: '*',
          Component: NotFoundRoute,
        },
      ],
    },
  ]);
