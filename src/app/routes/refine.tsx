import { Refine } from '@refinedev/core';
import { DevtoolsPanel } from '@refinedev/devtools';
import { RefineKbar } from '@refinedev/kbar';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router';
import dataProvider from '@refinedev/simple-rest';
import { HeroUIProvider } from '@heroui/react';
import { Outlet, useHref, useNavigate } from 'react-router';

import { routeResources } from './resources';

export function RefineProviderRouter() {
  const navigate = useNavigate();
  
  return (
    <HeroUIProvider
      navigate={navigate}
      useHref={useHref}
      className="relative flex h-dvh w-full flex-col overflow-x-hidden bg-background font-[450] text-foreground"
    >
      <Refine
        dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
        routerProvider={routerBindings}
        resources={routeResources}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: 'N1WMaW-mepCf6-b6Fkb3',
        }}
      >
        <Outlet />

        <RefineKbar />
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
      <DevtoolsPanel />
    </HeroUIProvider>
  );
}
