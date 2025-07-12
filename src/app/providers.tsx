import { DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbarProvider } from '@refinedev/kbar';
import { Suspense } from 'react';
import { Spinner } from '@heroui/spinner';
import { ErrorBoundary } from 'react-error-boundary';

import { MainErrorFallback } from '@/components/error/main';

export function AppProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="lg" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <RefineKbarProvider>
          <DevtoolsProvider>{children}</DevtoolsProvider>
        </RefineKbarProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
