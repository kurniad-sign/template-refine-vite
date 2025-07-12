import { useBreadcrumb } from '@refinedev/core';
import {
  BreadcrumbItem as HeroUIBreadcrumbItem,
  Breadcrumbs as HeroUIBreadcrumbs,
} from '@heroui/breadcrumbs';

import { Text } from '../text';

export const Breadcrumb = () => {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <HeroUIBreadcrumbs underline="hover" className="my-2">
      {breadcrumbs.map((breadcrumb) => {
        return (
          <HeroUIBreadcrumbItem
            href={breadcrumb.href}
            key={`breadcrumb-${breadcrumb.label}`}
          >
            <Text>{breadcrumb.label}</Text>
          </HeroUIBreadcrumbItem>
        );
      })}
    </HeroUIBreadcrumbs>
  );
};
