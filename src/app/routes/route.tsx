import { ErrorComponent } from '@refinedev/core';
import { NavigateToResource } from '@refinedev/react-router';
import { HeroUIProvider } from '@heroui/system';
import { Outlet, Route, Routes, useHref, useNavigate } from 'react-router';

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from '@/app/pages/categories';
import { Layout } from '@/components/layout';

export function AppRoute() {
  const navigate = useNavigate();

  return (
    <HeroUIProvider
      navigate={navigate}
      useHref={useHref}
      className="relative flex h-dvh w-full flex-col overflow-x-hidden bg-background font-[450] text-foreground"
    >
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
    </HeroUIProvider>
  );
}
