import filterIcon from "../../assets/icons/filter.svg"
import downCaret from "../../assets/icons/downCaret.svg"
import leftCaret from "../../assets/icons/leftCaret.svg"
import rightCaret from "../../assets/icons/rightCaret.svg"
import downloadIcon from "../../assets/icons/download.svg"
import helmetImg from "../../assets/icons/helmet.svg"
import Searchbar from "../../components/Searchbar";
import { ORDER_STATUS } from "../../assets/mock-data";
import { useCallback, useEffect, useState } from "react"
import useFilter from "../../assets/customhooks/useFilter"
import { useQuery } from "@tanstack/react-query"
import { getAllOrders, getSingleOrder } from "../../api/order"




const Orders = () => {

    // Tanstack query (react query) code for fetching data from backend

    // query for fetching all orders
    const { data, isSuccess } = useQuery({ queryFn: getAllOrders })

    // const { data: orderDetail, refetch } = useQuery({ queryFn: () => getSingleOrder("65f712c270e76a000848f71b"), })
    console.log(data);

    const [filterQty, setFilterQty] = useState({})
    const [selectedOrderId, setSelectedOrderId] = useState()
    const [allOrders, setAllOrders] = useState([])
    const [isScrolling, setIsScrolling] = useState({
        left: false,
        right: false
    })
    const [orders, setOrders] = useState()
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(9)
    const [filterOrders, setFilterOrders] = useState("all")
    const [serchFilter, setSerchFilter] = useState()

    const filteredOrderData = useFilter({ inpValue: serchFilter, AllData: data ? data.orders : allOrders, filterFrom: ["totalPrice", "_id", "orderStatus"] })

    useEffect(() => {
        if (serchFilter) {
            setAllOrders(filteredOrderData)
        } else {
            setAllOrders(data && data.orders)
        }
    }, [serchFilter])
    // .filter data for dropdown 
    const handleFilterOrder = (selectedOrder) => {
        setPage(0)
        if (selectedOrder === "all") {
            setFilterOrders(selectedOrder)
            setAllOrders(data.orders)
        } else {
            console.log(selectedOrder);
            setFilterOrders(selectedOrder)
            setAllOrders(data.orders.filter(item => item.orderStatus === selectedOrder))
        }
    }



    // pagination pre and next functions
    const handleNext = () => {
        setPage(page === (Math.floor(allOrders.length / 9)) ? page : page + 1)
    }

    const handlePre = () => {
        setPage(page === 0 ? page : page - 1)
    }

    // handlescrollbar for hiding scrollbar order detail modal
    const handleScrollbar = useCallback((side) => {
        if (!isScrolling[side]) {
            setIsScrolling(prevState => ({ ...prevState, [side]: true }));
        } else {
            setTimeout(() => {
                setIsScrolling({ left: false, right: false });
            }, 3000);
        }
    }, [isScrolling]);




    useEffect(() => {
        if (isSuccess) {
            setAllOrders(data.orders)
            setFilterQty({
                all: data && data.ordersCount,
                delivered: data && data.orders.filter(item => item.orderStatus === "delivered").length,
                Processing: data && data.orders.filter(item => item.orderStatus === "processing").length,
                cancelled: data && data.orders.filter(item => item.orderStatus === "cancelled").length,
                Shipped: data && data.orders.filter(item => item.orderStatus === "Shipped").length,
            })
        }
    }, [isSuccess])

    // modal window close code 
    useEffect(() => {
        const modal = document.getElementById('orderDetailModal');

        const handleClickOutsideModal = (event) => {
            if (event.target === modal) {
                modal.close();
            }
        };

        document.addEventListener('click', handleClickOutsideModal);

        return () => {
            document.removeEventListener('click', handleClickOutsideModal);
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

    return allOrders && (
        <div className='bg-lightgray h-full w-full p-6 pb-11'>
            <h1 className='font-lato text-[32px] font-bold   text-black leading-[38.4px] '>Total Orders</h1>

            <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 pb-12 px-5">

                <div className=" justify-between flex items-center ">
                    {/* Searchbar */}
                    <Searchbar placeholder={"Search by order id or Total  price"}
                        setSerchFilter={setSerchFilter} />

                    <div className="flex items-center gap-3">

                        <div className="w-[199px]  rounded-[10px]">
                            <div className=" bg-darksmoke flex items-center gap-2 rounded-[10px] border-[0.6px] border-borderColor">
                                <div className="h-full px-3 py-[10px]   border-r border-r-borderColor">
                                    <img className=" " src={filterIcon} alt="" />
                                </div>
                                <div role="button" tabIndex={0} className="flex dropdown dropdown-bottom justify-between pr-3 w-full items-center">
                                    <div className="font-bold text-[14px] w-full font-lato text-black" >

                                        <div className="flex items-center w-full ">
                                            <div className=" m-1 capitalize">{filterOrders} ({filterQty[filterOrders]})</div>
                                            <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-md w-full">
                                                {
                                                    ORDER_STATUS.map((item, i) => <li key={i} onClick={e => handleFilterOrder(item)}
                                                        className={` p-2 rounded-md capitalize hover:text-white hover:bg-red ${item === filterOrders && "bg-red text-white my-1"}`}>{item} ({filterQty[item]})</li>)
                                                }

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
                        {
                            orders && orders.length > 0
                                ?

                                <table className="table rounded-2xl table-lg">
                                    {/* head */}
                                    <thead className=" rounded-[12px] bg-gray1">

                                        <tr className="">
                                            <th className="font-bold font-lato text-black text-[14px]">ID</th>
                                            <th className="font-bold font-lato text-black text-[14px]">Total Price</th>
                                            <th className="font-bold text-center font-lato text-black text-[14px]">Order Status</th>
                                            <th className=" font-bold text-center font-lato text-black text-[14px]">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            orders.map(item => <tr key={item._id} className="">
                                                <td className="font-lato font-semibold text-[14px] text-black">{item._id}</td>
                                                <td className="font-lato font-semibold text-[14px] text-black">₹{item.totalPrice}</td>
                                                <td className="flex justify-center items-center font-lato font-semibold text-[14px]">

                                                    <div className={` w-[93px] text-center py-1 rounded-md capitalize
                                     ${item.orderStatus === "delivered" ? "bg-green"
                                                            : item.orderStatus === "Shipped" ? "bg-yellow"
                                                                : item.orderStatus === "Processing" ? "bg-skyblue"
                                                                    : item.orderStatus === "cancelled" ? "bg-lightred" : "bg-black"} text-white   `}>
                                                        {item.orderStatus}
                                                    </div>

                                                </td>

                                                <td className=" text-center font-lato font-semibold text-[14px]"><button onClick={() => {
                                                    setSelectedOrderId(item._id)
                                                    window.orderDetailModal.showModal()
                                                    const dd = document.getElementById("orderInfo")
                                                    dd.scrollTop = 0
                                                    // window.orderDetailModal.scrollTop = 0
                                                    // window.orderDetailModal.top = 0

                                                }} className="btn text-nowrap btn-sm btn-outline btn-primary rounded-md text-white">View Orders</button></td>
                                            </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                                : <>
                                    <div className="p-8">
                                        <h1 className="text-lg font-lato font-semibold">No records found</h1>
                                    </div>
                                </>
                        }
                    </div>

                    <hr />
                    <div className="flex items-center justify-end   gap-3 mt-3">
                        <p className="font-lato font-semibold text-grey  text-[14px]">Showing {Orders && (
                            (allOrders.length === 0) ? 0
                                : (page === 0) ? 1 : page * limit)} - {orders && (page * limit + orders.length)} of {allOrders.length}</p>
                        <div className=" border-borderColor  join ">

                            <button disabled={page === 0} onClick={handlePre} className={`border-[0.6px] rounded-l-lg  p-2  px-3  bg-smoke ${page === 0 && "opacity-55"}`}><img src={leftCaret} /></button>

                            <button disabled={page === (Math.floor(allOrders.length / 9) === 1 ? 0 : Math.floor(allOrders.length / 9))} onClick={handleNext} className={`border-[0.6px] rounded-r-lg p-2  px-3 bg-smoke ${page === (Math.floor(allOrders.length / 9) === 1 ? 0 : Math.floor(allOrders.length / 9)) && "opacity-55"} `}><img src={rightCaret} alt="" /></button>
                        </div>
                    </div>

                </div>

            </div>





            {/* Order detail modal start */}


            <dialog id="orderDetailModal" className=" modal ">

                <form method="dialog" className="rounded-lg  relative border shadow-lg p-3 py-5 max-h-[907px] max-w-[1085px] bg-white">
                    <div className="modal-overlay"></div>
                    <div className="">


                        <div className="grid  justify-center px-4 grid-cols-12">

                            <div onScroll={() => handleScrollbar("left")} className={`col-span-4  scrollbar-width-sm overflow-y-auto ${!isScrolling.left && "hidden-scrollbar "}  lg:px-4 md:px-2 pb-4 h-[calc(100vh-80px)]`}>

                                <h1 className="font-lato  font-semibold text-center text-[24px]">Order Item</h1>
                                <div className="flex  flex-col justify-center ">
                                    <div className="">

                                        <div className="bg-darksmoke mt-8 rounded-lg shadow-md w-full h-[317px]">
                                            <img src={helmetImg} alt="" />
                                        </div>

                                        <div className="mt-3">

                                            <h2 className="font-semibold text-[18px] font-lato text-black">SG Optipro Cricket Helmet</h2>
                                            <div className="flex justify-between my-2  items-center">
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Price:</h3> <span className="text-stone font-medium">₹15000</span> </div>
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Qty:</h3> <span className="text-stone font-medium">1</span> </div>

                                            </div>
                                        </div>
                                        <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Product ID:</h3> <span className="text-stone font-medium">65f317a55deeaa0008f31cae</span> </div>
                                    </div>

                                </div>
                                <div className="flex  flex-col justify-center ">
                                    <div className="">

                                        <div className="bg-darksmoke mt-8 rounded-lg shadow-md w-full h-[317px]">
                                            <img src={helmetImg} alt="" />
                                        </div>

                                        <div className="mt-3">

                                            <h2 className="font-semibold text-[18px] font-lato text-black">SG Optipro Cricket Helmet</h2>
                                            <div className="flex justify-between my-2  items-center">
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Price:</h3> <span className="text-stone font-medium">₹15000</span> </div>
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Qty:</h3> <span className="text-stone font-medium">1</span> </div>

                                            </div>
                                        </div>
                                        <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Product ID:</h3> <span className="text-stone font-medium">65f317a55deeaa0008f31cae</span> </div>
                                    </div>

                                </div>

                            </div>




                            {/* order Information -- order detail modal */}

                            <div
                                id="orderInfo"
                                onScroll={() => handleScrollbar("right")} className={`col-span-8  scrollbar-width-sm overflow-y-auto  border-l-2 border-dashed h-[calc(100vh-80px)] ${!isScrolling.right && "hidden-scrollbar"}`}>
                                <h1 className="font-lato font-semibold text-center text-[24px]" >Order Information</h1>
                                <div className="px-3 flex mt-1  justify-center flex-col ">

                                    <div className=" flex flex-col p-5  gap-3 border-b-2 border-dashed justify-center ">

                                        <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Address:</h3> <span className="font-medium text-lightbrown">Tulsipur 4 Banahari Dang</span> </div>
                                        <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Landmark:</h3> <span className="font-medium text-lightbrown">Purvanchal Campus abc</span> </div>
                                        <div className="flex items-center font-lato flex-wrap  justify-between">
                                            <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">State:</h3> <span className=" text-lightbrown font-medium">Lumbini</span> </div>
                                            <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">City:</h3> <span className=" text-lightbrown font-medium">Tulsipur</span> </div>
                                            <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Country:</h3> <span className=" text-lightbrown font-medium">India</span> </div>
                                        </div>
                                        <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Pin Code:</h3> <span className="font-medium text-lightbrown">22200</span> </div>

                                    </div>

                                    <div className="flex flex-col p-5  gap-3  justify-start border-b-2 border-dashed">
                                        <div className="font-semibold  font-lato justify-between    flex items-center"><h3 className="text-black">Item Price:</h3> <span className="font-medium text-lightbrown">₹15000</span> </div>
                                        <div className="font-semibold  font-lato justify-between    flex items-center"><h3 className="text-black">Discount:</h3> <span className="font-medium text-lightbrown">₹0</span> </div>
                                        <div className="font-semibold  font-lato justify-between    flex items-center"><h3 className="text-black">Total Price:</h3> <span className="font-medium text-lightbrown">₹0</span> </div>
                                    </div>
                                    <div className="flex flex-col p-5 gap-3   border-b-2 border-dashed">
                                        <div className="flex items-center flex-wrap justify-between ">
                                            <div className="font-semibold  font-lato    flex items-center gap-2"><h3 className="text-black">User Name:</h3> <span className="font-medium text-lightbrown">Test 12345</span> </div>
                                            <div className="font-semibold  font-lato    flex items-center gap-2"><h3 className="text-black">Phone No:</h3> <span className="font-medium text-lightbrown">9545854125</span> </div>

                                        </div>
                                        <div className="font-semibold  font-lato    flex items-center gap-2"><h3 className="text-black">User Email:</h3> <span className="font-medium text-lightbrown">Test 12345@gmail.com</span> </div>
                                    </div>


                                    <div className="flex flex-col p-5 gap-3   border-b-2 border-dashed">
                                        <div className="font-semibold  font-lato    flex items-center gap-2"><h3 className="text-black">Order Status:</h3> <span className="font-semibold text-red">Processing</span> </div>
                                        <h3 className="text-black font-semibold">Process Order</h3>
                                    </div>

                                    <div className="flex flex-col p-5 gap-3  ">
                                        <div className="px-1 mb-10 pr-5 rounded-lg border-borderColor border-[0.6px] bg-darksmoke w-full">
                                            {/* select box */}
                                            <select className=" px-3 pr-5 bg-darksmoke w-full   select-sm outline-none focus:outline-none">
                                                <option disabled selected>Choose Status</option>
                                                <option>Pending</option>
                                                <option>Shipped</option>
                                                <option>Cancelled</option>
                                                <option>Delivered</option>
                                            </select>
                                        </div>
                                        <div className="w-full bg-white  flex justify-center">

                                            <div className="flex   fixed bottom-10  justify-center gap-8 mt-3 items-center">
                                                <button className="  w-[192px] h-[40px] border border-borderColor  rounded-[6px] bg-lightgreen text-white">Process</button>
                                                <button className="  w-[192px] h-[40px] border border-borderColor rounded-[6px] bg-white outline-double outline-1 text-black  hover:bg-black hover:text-white">Download Invice</button>
                                            </div>
                                        </div>

                                    </div>


                                </div>



                            </div>

                        </div>

                    </div>

                </form>
            </dialog>



            {/* Order detail modal end */}






        </div >
    )
}

export default Orders