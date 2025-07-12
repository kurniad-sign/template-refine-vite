import { DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbarProvider } from '@refinedev/kbar';

export function AppProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RefineKbarProvider>
      <DevtoolsProvider>{children}</DevtoolsProvider>
    </RefineKbarProvider>
  );
}
