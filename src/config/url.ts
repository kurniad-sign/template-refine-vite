export const ROUTE_URL = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  app: {
    categories: {
      default: {
        path: '/categories',
        getHref: () => '/categories',
      },
      create: {
        path: '/categories/create',
        getHref: () => '/categories/create',
      },
      show: {
        path: '/categories/:id',
        getHref: (id: string) => `/categories/${id}`,
      },
      edit: {
        path: '/categories/edit/:id',
        getHref: (id: string) => `/categories/edit/${id}`,
      },
    },
  },
};
