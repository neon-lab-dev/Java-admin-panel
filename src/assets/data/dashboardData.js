import icon1 from '../../assets/icon/Icon1.svg';
import icon2 from '../../assets/icon/Icon2.svg';
import icon3 from '../../assets/icon/Icon3.svg';
import icon4 from '../../assets/icon/Icon4.svg';
import icon5 from '../../assets/icon/Icon5.svg';
import icon6 from '../../assets/icon/Icon6.svg';
import icon7 from '../../assets/icon/Icon7.svg';
import icon8 from '../../assets/icon/Icon8.svg';
import icon9 from '../../assets/icon/Icon9.svg';

let dashboardData=[{
    "image":icon1,
    "title":"Total User",
    "queryKey":"userCount"
  },
  {
    "image":icon2,
    "title":"Total Products",
    "queryKey":"productsCount"
  },{
    "image":icon3,
    "title":"Total Revenue",
    "queryKey":"totalOrdersAmount"
  },{
    "image":icon4,
    "title":"Total cancellation",
    "queryKey":"totalOrdersAmountCancelled"
  },{
    "image":icon5,
    "title":"Total Order",
    "queryKey":"TotalOrders"
  },{
    "image":icon6,
    "title":"Orders delivered",
    "queryKey":"orderDelivered"
  },{
    "image":icon7,
    "title":"Orders Pending",
    "queryKey":"ordersPlaced"
  },{
    "image":icon8,
    "title":"Orders cancelled",
    "queryKey":"orderCancelled"
  },{
    "image":icon9,
    "title":"Order Shipped",
    "queryKey":"orderShipped"
  }]

  export default dashboardData;