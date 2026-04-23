import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const ToursPage = lazy(() => import("./pages/Tours"));
const TourDetailPage = lazy(() => import("./pages/TourDetail"));
const DestinationsPage = lazy(() => import("./pages/Destinations"));
const DestinationDetailPage = lazy(() => import("./pages/DestinationDetail"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <Skeleton className="h-64 w-full rounded-xl mb-6" />
      <Skeleton className="h-8 w-1/2 mb-3" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </QueryClientProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const toursRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tours",
  component: ToursPage,
});

const tourDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tours/$id",
  component: TourDetailPage,
});

const destinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/destinations",
  component: DestinationsPage,
});

const destinationDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/destinations/$id",
  component: DestinationDetailPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  toursRoute,
  tourDetailRoute,
  destinationsRoute,
  destinationDetailRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
