import { lazy } from "react";

//   path: string // Path of the route
//   component: LazyExoticComponent<() => JSX.Element> // Component to render -> lazy import with async await

const ROUTES = [
  {
    path: "/",
    component: lazy(async () => await import("../pages/Home/index")),
  },
  {
    path: "/dashboard",
    component: lazy(async () => await import("../pages/Home/index")),
  },
  {
    path: "/products",
    component: lazy(async () => await import("../pages/Products/index")),
  },
  {
    path: "/orders",
    component: lazy(async () => await import("../pages/Orders/index")),
  },
  {
    path: "/users",
    component: lazy(async () => await import("../pages/User/index")),
  },
  {
    path: "/coupons",
    component: lazy(async () => await import("../pages/Coupons/index")),
  },
];
export default ROUTES;
