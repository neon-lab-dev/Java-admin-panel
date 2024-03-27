import filterIcon from "../../assets/icons/filter.svg";
import downCaret from "../../assets/icons/downCaret.svg";
import leftCaret from "../../assets/icons/leftCaret.svg";
import rightCaret from "../../assets/icons/rightCaret.svg";
import downloadIcon from "../../assets/icons/download.svg";
import Searchbar from "../../components/Searchbar";
import { ORDER_STATUS } from "../../assets/mock-data";
import { useCallback, useEffect, useState } from "react";
import useFilter from "../../assets/customhooks/useFilter";
import { useQuery } from "@tanstack/react-query";
import { getAllOrders, getSingleOrder } from "../../api/order";
import OrderModal from "./OrderModal";

const Orders = () => {
  // Tanstack query (react query) code for fetching data from backend
  // query for fetching all orders
  const { data, isSuccess } = useQuery({
    queryFn: getAllOrders,
    queryKey: ["orders"],
  });

  // const { data: orderDetail, refetch } = useQuery({ queryFn: () => getSingleOrder("65f712c270e76a000848f71b"), })
  console.log(data);

  const [filterQty, setFilterQty] = useState({});
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [allOrders, setAllOrders] = useState([]);

  const [orders, setOrders] = useState();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [filterOrders, setFilterOrders] = useState("all");
  const [serchFilter, setSerchFilter] = useState();

  const filteredOrderData = useFilter({
    inpValue: serchFilter,
    AllData: data ? data.orders : allOrders,
    filterFrom: ["totalPrice", "_id", "orderStatus"],
  });

  useEffect(() => {
    if (serchFilter) {
      setAllOrders(filteredOrderData);
    } else {
      setAllOrders(data && data.orders);
    }
  }, [serchFilter]);
  // .filter data for dropdown
  const handleFilterOrder = (selectedOrder) => {
    setPage(0);
    if (selectedOrder === "all") {
      setFilterOrders(selectedOrder);
      setAllOrders(data.orders);
    } else {
      console.log(selectedOrder);
      setFilterOrders(selectedOrder);
      setAllOrders(
        data.orders.filter((item) => item.orderStatus === selectedOrder)
      );
    }
  };

  // pagination pre and next functions
  const handleNext = () => {
    setPage(page === Math.floor(allOrders.length / 9) ? page : page + 1);
  };

  const handlePre = () => {
    setPage(page === 0 ? page : page - 1);
  };

  useEffect(() => {
    if (isSuccess) {
      setAllOrders(data.orders);
      setFilterQty({
        all: data && data.ordersCount,
        delivered:
          data &&
          data.orders.filter((item) => item.orderStatus === "delivered").length,
        Processing:
          data &&
          data.orders.filter((item) => item.orderStatus === "processing")
            .length,
        cancelled:
          data &&
          data.orders.filter((item) => item.orderStatus === "cancelled").length,
        Shipped:
          data &&
          data.orders.filter((item) => item.orderStatus === "Shipped").length,
      });
    }
  }, [isSuccess]);

  // modal window close code
  useEffect(() => {
    const modal = document.getElementById("orderDetailModal");

    const handleClickOutsideModal = (event) => {
      if (event.target === modal) {
        modal.close();
      }
    };

    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  useEffect(() => {
    const temp = [];
    for (let i = page * limit; i < page * 9 + limit; i++) {
      if (allOrders && allOrders[i]) {
        temp.push(allOrders[i]);
      }
    }
    setOrders(temp);
    console.log("called");
  }, [page, allOrders, data]);

  return (
    allOrders && (
      <div className="bg-lightgray h-full w-full p-6 pb-11">
        <h1 className="font-lato text-[32px] font-bold   text-black leading-[38.4px] ">
          Total Orders
        </h1>

        <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 pb-12 px-5">
          <div className=" justify-between flex items-center ">
            {/* Searchbar */}
            <Searchbar
              placeholder={"Search by order id or Total  price"}
              setSerchFilter={setSerchFilter}
            />

            <div className="flex items-center gap-3">
              <div className="w-[199px]  rounded-[10px]">
                <div className=" bg-darksmoke flex items-center gap-2 rounded-[10px] border-[0.6px] border-borderColor">
                  <div className="h-full px-3 py-[10px]   border-r border-r-borderColor">
                    <img className=" " src={filterIcon} alt="" />
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex dropdown dropdown-bottom justify-between pr-3 w-full items-center"
                  >
                    <div className="font-bold text-[14px] w-full font-lato text-black">
                      <div className="flex items-center w-full ">
                        <div className=" m-1 capitalize">
                          {filterOrders} ({filterQty[filterOrders]})
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-md w-full"
                        >
                          {ORDER_STATUS.map((item, i) => (
                            <li
                              key={i}
                              onClick={(e) => handleFilterOrder(item)}
                              className={` p-2 rounded-md capitalize hover:text-white hover:bg-red ${
                                item === filterOrders &&
                                "bg-red text-white my-1"
                              }`}
                            >
                              {item} ({filterQty[item]})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <img src={downCaret} alt="" />
                  </div>
                </div>
              </div>

              {/* downloadIcon */}
              <button className=" bg-lightgray  rounded-[6px]">
                <img src={downloadIcon} alt="" />
              </button>
            </div>
          </div>

          {/* order table */}

          <div className="mt-4">
            <div className="overflow-x-auto">
              {orders && orders.length > 0 ? (
                <table className="table rounded-2xl table-lg">
                  {/* head */}
                  <thead className=" rounded-[12px] bg-gray1">
                    <tr className="">
                      <th className="font-bold font-lato text-black text-[14px]">
                        ID
                      </th>
                      <th className="font-bold font-lato text-black text-[14px]">
                        Total Price
                      </th>
                      <th className="font-bold text-center font-lato text-black text-[14px]">
                        Order Status
                      </th>
                      <th className=" font-bold text-center font-lato text-black text-[14px]">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((item) => (
                      <tr key={item._id} className="">
                        <td className="font-lato font-semibold text-[14px] text-black">
                          {item._id}
                        </td>
                        <td className="font-lato font-semibold text-[14px] text-black">
                          ₹{item.itemsPrice}
                        </td>
                        <td className="flex justify-center items-center font-lato font-semibold text-[14px]">
                          <div
                            className={` w-[93px] text-center py-1 rounded-md capitalize
                                     ${
                                       item.orderStatus === "delivered"
                                         ? "bg-green"
                                         : item.orderStatus === "Shipped"
                                         ? "bg-yellow"
                                         : item.orderStatus === "Processing"
                                         ? "bg-skyblue"
                                         : item.orderStatus === "cancelled"
                                         ? "bg-lightred"
                                         : "bg-black"
                                     } text-white   `}
                          >
                            {item.orderStatus}
                          </div>
                        </td>

                        <td className=" text-center font-lato font-semibold text-[14px]">
                          <button
                            onClick={() => {
                              setSelectedOrderId(item._id);
                              window.orderDetailModal.showModal();
                              const dd = document.getElementById("orderInfo");
                              dd.scrollTop = 0;
                              // window.orderDetailModal.scrollTop = 0
                              // window.orderDetailModal.top = 0
                            }}
                            className="btn text-nowrap btn-sm btn-outline btn-primary rounded-md text-white"
                          >
                            View Orders
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <>
                  <div className="p-8">
                    <h1 className="text-lg font-lato font-semibold">
                      No records found
                    </h1>
                  </div>
                </>
              )}
            </div>

            <hr />
            <div className="flex items-center justify-end   gap-3 mt-3">
              <p className="font-lato font-semibold text-grey  text-[14px]">
                Showing{" "}
                {Orders &&
                  (allOrders.length === 0
                    ? 0
                    : page === 0
                    ? 1
                    : page * limit)}{" "}
                - {orders && page * limit + orders.length} of {allOrders.length}
              </p>
              <div className=" border-borderColor  join ">
                <button
                  disabled={page === 0}
                  onClick={handlePre}
                  className={`border-[0.6px] rounded-l-lg  p-2  px-3  bg-smoke ${
                    page === 0 && "opacity-55"
                  }`}
                >
                  <img src={leftCaret} />
                </button>

                <button
                  disabled={
                    page ===
                    (Math.floor(allOrders.length / 9) === 1
                      ? 0
                      : Math.floor(allOrders.length / 9))
                  }
                  onClick={handleNext}
                  className={`border-[0.6px] rounded-r-lg p-2  px-3 bg-smoke ${
                    page ===
                      (Math.floor(allOrders.length / 9) === 1
                        ? 0
                        : Math.floor(allOrders.length / 9)) && "opacity-55"
                  } `}
                >
                  <img src={rightCaret} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <OrderModal selectedOrderId={selectedOrderId} />
      </div>
    )
  );
};

export default Orders;
