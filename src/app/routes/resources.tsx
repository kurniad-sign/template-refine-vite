import { ResourceProps } from '@refinedev/core';

export const routeResources: ResourceProps[] = [
  {
    name: 'categories',
    list: '/categories',
    create: '/categories/create',
    edit: '/categories/edit/:id',
    show: '/categories/show/:id',
    meta: {
      canDelete: true,
    },
  },
];
