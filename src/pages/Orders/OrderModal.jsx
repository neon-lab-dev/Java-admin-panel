import { useCallback, useEffect, useState } from "react";
import helmetImg from "../../assets/icons/helmet.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleOrder, updateOrder } from "../../api/order";
import AppLoading from "../../components/loaders/AppLoading";

const OrderModal = ({ selectedOrderId }) => {


  const queryClient = useQueryClient();

  const { refetch, data, isLoading, isSuccess: getOrderDetailSuccess } = useQuery({
    enabled: false,
    queryFn: () => getSingleOrder(selectedOrderId),
    queryKey: ["getSingle", selectedOrderId]
  });



  const { isSuccess, error, mutate, isPending } = useMutation({
    mutationFn: () => updateOrder({ orderId: selectedOrderId, updatedData: { status: updatedStatus } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] })
  })



  const [isScrolling, setIsScrolling] = useState({
    left: false,
    right: false,
  });


  // handle scrollbar for hiding scrollbar order detail modal
  const handleScrollbar = useCallback(
    (side) => {
      if (!isScrolling[side]) {
        setIsScrolling((prevState) => ({ ...prevState, [side]: true }));
      } else {
        setTimeout(() => {
          setIsScrolling({ left: false, right: false });
        }, 3000);
      }
    },
    [isScrolling]
  );




  const [updatedStatus, setUpdatedStatus] = useState(data?.order?.orderStatus.toLowerCase())


  const handleUpdate = () => {
    mutate()
  }



  useEffect(() => {
    if (selectedOrderId || isSuccess) {
      refetch()
    }
  }, [selectedOrderId, isSuccess])


  useEffect(() => {
    if (getOrderDetailSuccess) {
      setUpdatedStatus(data?.order?.orderStatus.toLowerCase())
    }
  }, [getOrderDetailSuccess])

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



  return (
    <>
      {/* Order detail modal start */}

      <dialog id="orderDetailModal" className=" modal ">

        {
          isLoading ? <AppLoading />


            : <>


              <form
                method="dialog"
                className="rounded-lg  relative border shadow-lg p-3 py-5 max-h-[907px] max-w-[1085px] bg-white"
              >
                {
                  isLoading ? <AppLoading />
                    : <>
                    </>
                }
                <div className="modal-overlay"></div>
                <div className="">
                  <div className="grid  justify-center px-4 grid-cols-12">
                    <div
                      onScroll={() => handleScrollbar("left")}
                      className={`col-span-4  scrollbar-width-sm overflow-y-auto ${!isScrolling.left && "hidden-scrollbar "
                        }  lg:px-4 md:px-2 pb-4 h-[calc(100vh-80px)]`}
                    >
                      <h1 className="font-lato  font-semibold text-center text-[24px]">
                        Order Item
                      </h1>
                      {
                        data?.order?.orderItems?.map(item => <div key={item._id}>
                          <div className="flex  flex-col justify-center ">
                            <div className="">
                              <div className="bg-darksmoke mt-8 rounded-lg flex justify-center items-center shadow-md w-full h-[317px]">
                                <img src={item?.image} alt="" />
                              </div>

                              <div className="mt-3">
                                <h2 className="font-semibold text-[18px] font-lato text-black">
                                  {item.name}
                                </h2>
                                <div className="flex justify-between my-2  items-center">
                                  <div className="font-semibold  flex items-center gap-1">
                                    <h3 className="text-black">Price:</h3>{" "}
                                    <span className="text-stone font-medium">₹{item.price}</span>{" "}
                                  </div>
                                  <div className="font-semibold  flex items-center gap-1">
                                    <h3 className="text-black">Qty:</h3>{" "}
                                    <span className="text-stone font-medium">{item.quantity}</span>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="font-semibold  flex items-center gap-1">
                                <h3 className="text-black">Product ID:</h3>{" "}
                                <span className="text-stone font-medium">
                                  {item._id}
                                </span>{" "}
                              </div>
                            </div>
                          </div>

                        </div>)
                      }





                    </div>

                    {/* order Information -- order detail modal */}

                    <div
                      id="orderInfo"
                      onScroll={() => handleScrollbar("right")}
                      className={`col-span-8  scrollbar-width-sm overflow-y-auto  border-l-2 border-dashed h-[calc(100vh-80px)] ${!isScrolling.right && "hidden-scrollbar"
                        }`}
                    >
                      <h1 className="font-lato font-semibold text-center text-[24px]">
                        Order Information
                      </h1>
                      <div className="px-3 flex mt-1  justify-center flex-col ">
                        <div className=" flex flex-col p-5  gap-3 border-b-2 border-dashed justify-center ">
                          <div className="font-semibold  font-lato     flex items-center gap-1">
                            <h3 className="text-black">Address: </h3>{" "}
                            <span className="font-medium text-lightbrown">
                              {data?.order?.shippingInfo?.address}
                            </span>{" "}
                          </div>
                          <div className="font-semibold  font-lato     flex items-center gap-1">
                            <h3 className="text-black">Landmark:</h3>{" "}
                            <span className="font-medium text-lightbrown">
                              {data?.order?.shippingInfo?.landmark}
                            </span>{" "}
                          </div>
                          <div className="flex items-center font-lato flex-wrap  justify-between">
                            <div className="font-semibold  font-lato     flex items-center gap-1">
                              <h3 className="text-black">State:</h3>{" "}
                              <span className=" text-lightbrown font-medium">
                                {data?.order?.shippingInfo?.state}
                              </span>{" "}
                            </div>
                            <div className="font-semibold  font-lato     flex items-center gap-1">
                              <h3 className="text-black">City:</h3>{" "}
                              <span className=" text-lightbrown font-medium">
                                {data?.order?.shippingInfo?.city}
                              </span>{" "}
                            </div>
                            <div className="font-semibold  font-lato     flex items-center gap-1">
                              <h3 className="text-black">Country:</h3>{" "}
                              <span className=" text-lightbrown font-medium">
                                India
                              </span>{" "}
                            </div>
                          </div>
                          <div className="font-semibold  flex items-center gap-1">
                            <h3 className="text-black">Pin Code:</h3>{" "}
                            <span className="font-medium text-lightbrown">{data?.order?.shippingInfo?.pinCode}</span>{" "}
                          </div>
                        </div>

                        <div className="flex flex-col p-5  gap-3  justify-start border-b-2 border-dashed">
                          <div className="font-semibold  font-lato justify-between    flex items-center">
                            <h3 className="text-black">Item Price:</h3>{" "}
                            <span className="font-medium text-lightbrown">
                              ₹{data?.order?.itemsPrice}
                            </span>{" "}
                          </div>
                          <div className="font-semibold  font-lato justify-between    flex items-center">
                            <h3 className="text-black">Discount:</h3>{" "}
                            <span className="font-medium text-lightbrown">₹{data?.order?.discount}</span>{" "}
                          </div>
                          <div className="font-semibold  font-lato justify-between    flex items-center">
                            <h3 className="text-black">Total Price:</h3>{" "}
                            <span className="font-medium text-lightbrown">₹{data?.order?.totalPrice}</span>{" "}
                          </div>
                        </div>
                        <div className="flex flex-col p-5 gap-3   border-b-2 border-dashed">
                          <div className="flex items-center flex-wrap justify-between ">
                            <div className="font-semibold  font-lato    flex items-center gap-2">
                              <h3 className="text-black">User Name:</h3>{" "}
                              <span className="font-medium text-lightbrown">
                                {data?.userdetails.name}
                              </span>{" "}
                            </div>
                            <div className="font-semibold  font-lato    flex items-center gap-2">
                              <h3 className="text-black">Phone No:</h3>{" "}
                              <span className="font-medium text-lightbrown">
                                {data?.order?.shippingInfo?.phoneNo}
                              </span>{" "}
                            </div>
                          </div>
                          <div className="font-semibold  font-lato    flex items-center gap-2">
                            <h3 className="text-black">User Email:</h3>{" "}
                            <span className="font-medium text-lightbrown">
                              {data?.userdetails.email}
                            </span>{" "}
                          </div>
                        </div>

                        <div className="flex flex-col p-5 gap-3   border-b-2 border-dashed">
                          <div className="font-semibold  font-lato    flex items-center gap-2">
                            <h3 className="text-black">Order Status:</h3>{" "}
                            <span className="font-semibold capitalize text-red">{data?.order?.orderStatus}</span>{" "}
                          </div>
                          <h3 className="text-black font-semibold">Process Order</h3>
                        </div>

                        <div className="flex flex-col p-5 gap-3  ">
                          <div className="px-1 mb-10 pr-5 rounded-lg border-borderColor border-[0.6px] bg-darksmoke w-full">
                            {/* select box */}
                            <select onChange={e => setUpdatedStatus(e.target.value)} value={updatedStatus} className=" px-3 pr-5 bg-darksmoke w-full   select-sm outline-none focus:outline-none">
                              <option disabled selected>
                                Choose Status
                              </option>
                              <option value={"processing"}>Processing</option>
                              <option value={"shipped"}>Shipped</option>
                              <option value={"cancelled"}>Cancelled</option>
                              <option value={"delivered"}>Delivered</option>
                            </select>
                          </div>
                          <div className="w-full bg-white  flex justify-center">
                            <div className="flex   fixed bottom-10  justify-center gap-8 mt-3 items-center">
                              <button
                                type="button"
                                onClick={handleUpdate}
                                className="  w-[192px] h-[40px] border border-borderColor  rounded-[6px] bg-lightgreen text-white">
                                {(isPending || isLoading) ? <div className="loading-spinner loading" /> : "Process Order"}
                              </button>
                              <button className="  w-[192px] h-[40px] border border-borderColor rounded-[6px] bg-white outline-double outline-1 text-black  hover:bg-black hover:text-white">
                                Download Invice
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

            </>

        }

      </dialog>

      {/* Order detail modal end */}
    </>
  );
};
export default OrderModal;
