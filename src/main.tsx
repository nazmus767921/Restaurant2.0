import Home from "@pages/Home";

import { routes } from "@pages/routes";
import "@styles/global.scss";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MenuPage = lazy(() => import("@pages/MenuPage"));
const ReservationPage = lazy(() => import("@pages/ReservationPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: routes.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: routes.FOOD_MENU_ROUTE,
    element: (
      <Suspense>
        <MenuPage />
      </Suspense>
    ),
  },
  {
    path: routes.RESERVATION_ROUTE,
    element: (
      <Suspense>
        <ReservationPage />
      </Suspense>
    ),
  },
  {
    path: routes.CONTACT_ROUTE,
    element: (
      <Suspense>
        <ContactPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
