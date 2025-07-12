import { Refine } from '@refinedev/core';
import { DevtoolsPanel } from '@refinedev/devtools';
import { RefineKbar } from '@refinedev/kbar';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router';
import dataProvider from '@refinedev/simple-rest';
import { BrowserRouter } from 'react-router';

import { routeResources } from './resources';
import { AppRoute } from './route';

export function AppRoutes() {
  return (
    <BrowserRouter>
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
        <AppRoute />

        <RefineKbar />
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
      <DevtoolsPanel />
    </BrowserRouter>
  );
}
