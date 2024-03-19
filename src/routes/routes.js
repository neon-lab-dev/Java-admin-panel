import { lazy } from "react";

//   path: string // Path of the route
//   component: LazyExoticComponent<() => JSX.Element> // Component to render -> lazy import with async await

const ROUTES = [
  {
    path: "/",
    component: lazy(async () => await import("../pages/Home/index")),
  },{
    path: "/Dashboard",
    component: lazy(async () => await import("../pages/Home/index")),
  },{
    path: "/Products",
    component: lazy(async () => await import("../pages/Products/index")),
  },{
    path: "/Order",
    component: lazy(async () => await import("../pages/Order/index")),
  },{
    path: "/User",
    component: lazy(async () => await import("../pages/User/index")),
  },{
    path: "/Coupons",
    component: lazy(async () => await import("../pages/Coupons/index")),
  }
  
];
export default ROUTES;
