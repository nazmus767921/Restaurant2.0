type RoutePath = `/${string}`;

interface IRoutes {
  [key: string]: RoutePath;
}

interface Routes {
  CONTACT_ROUTE: RoutePath;
  FOOD_MENU_ROUTE: RoutePath;
  HOME_ROUTE: RoutePath;
  OTHER_ROUTES: IRoutes;
  RESERVATION_ROUTE: RoutePath;
}

export const routes: Routes = {
  CONTACT_ROUTE: "/contact-us",
  FOOD_MENU_ROUTE: "/food-menu",
  HOME_ROUTE: "/",
  OTHER_ROUTES: prependBasePath("other", {
    LAB: "/lab",
    TEST: "/test",
  }),
  RESERVATION_ROUTE: "/reservation",
};

function prependBasePath(basePath: string, routes: IRoutes): IRoutes {
  const updatedRoutes: IRoutes = {};
  for (const key in routes) {
    updatedRoutes[key] = `/${basePath}${routes[key]}`;
  }
  return updatedRoutes;
}
