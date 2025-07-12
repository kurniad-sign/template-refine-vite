import { AppProviders } from './providers';
import { AppRoutes } from './routes';

function Application() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default Application;
