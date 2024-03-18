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
];
export default ROUTES;
