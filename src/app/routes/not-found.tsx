import { Link } from '@heroui/link';

import { ROUTE_URL } from '@/config/url';

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href={ROUTE_URL.app.categories.default.getHref()}>Go to Home</Link>
    </div>
  );
};

