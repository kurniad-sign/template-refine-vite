import { ErrorComponent } from '@refinedev/core';
import { NavigateToResource } from '@refinedev/react-router';
import { Outlet, Route, Routes } from 'react-router';

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from '@/app/pages/categories';
import { Layout } from '@/components/layout';

export function AppRoute() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<NavigateToResource resource="blog_posts" />} />

        <Route path="/categories">
          <Route index element={<CategoryList />} />
          <Route path="create" element={<CategoryCreate />} />
          <Route path="edit/:id" element={<CategoryEdit />} />
          <Route path="show/:id" element={<CategoryShow />} />
        </Route>
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
}
