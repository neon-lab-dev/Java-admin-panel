const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL + "/api/v1";

export const API = {
  //auth
  login: BACKEND_BASE_URL + "/login", //to login user
  user: BACKEND_BASE_URL + "/me", //to get user details
  logout: BACKEND_BASE_URL + "/logout", //to logout user 

  // order
  getOrders: BACKEND_BASE_URL + "/admin/orders",  // to get all orders
  getSingleOrder: BACKEND_BASE_URL + "/order",  // to get all orders
  updateOrder: BACKEND_BASE_URL + "/admin/order",  // to get all orders

  //dashboard
  dashboard: BACKEND_BASE_URL + "/admin/dashboard", //to get dashboard details

  //coupon
  allCoupon:BACKEND_BASE_URL + "/coupon/all", //to get all coupon details

  coupon:BACKEND_BASE_URL + "/coupon", // coupon details
  newCoupon:BACKEND_BASE_URL + "/coupon/new", // coupon details

  //users
  userDetails:BACKEND_BASE_URL + "/admin/users", //to get all users details
};
