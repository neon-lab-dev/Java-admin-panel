import filterIcon from "../../assets/icons/filter.svg"
import downCaret from "../../assets/icons/downCaret.svg"
import leftCaret from "../../assets/icons/leftCaret.svg"
import rightCaret from "../../assets/icons/rightCaret.svg"
import downloadIcon from "../../assets/icons/download.svg"
import helmetImg from "../../assets/icons/helmet.svg"
import Searchbar from "../../components/Searchbar";
import { ORDER_DATA } from "../../assets/mock-data";




const Orders = () => {








    return (
        <div className='bg-lightgray h-full w-full p-6 pb-11'>
            <h1 className='font-lato text-[32px] font-bold   text-black leading-[38.4px] '>Total Orders</h1>

            <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

                <div className=" justify-between flex items-center ">
                    {/* Searchbar */}
                    <Searchbar placeholder={"Search by order id or Total  price"} />

                    <div className="flex items-center gap-3">

                        <div className="w-[199px]  rounded-[10px]">
                            <div className=" bg-darksmoke flex items-center gap-2 rounded-[10px] border-[0.6px] border-borderColor">
                                <div className="h-full px-3 py-[10px]   border-r border-r-borderColor">
                                    <img className=" " src={filterIcon} alt="" />
                                </div>
                                <div role="button" tabIndex={0} className="flex dropdown dropdown-bottom justify-between pr-3 w-full items-center">
                                    <div className="font-bold text-[14px] w-full font-lato text-black" >

                                        <div className="flex items-center w-full ">
                                            <div className=" m-1">All (10)</div>
                                            <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-md w-full">
                                                <li className="p-2 rounded-md hover:text-white hover:bg-red">Delivered (10)</li>
                                                <li className="p-2 rounded-md hover:text-white hover:bg-red">Shipped (10)</li>
                                                <li className="p-2 rounded-md hover:text-white hover:bg-red">Processing (10)</li>
                                                <li className="p-2 rounded-md hover:text-white hover:bg-red">Cancelled (10)</li>
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

                                {ORDER_DATA.map(item => <tr className="">
                                    <td className="font-lato font-semibold text-[14px] text-black">#65f317a55deeaa0008f31cae</td>
                                    <td className="font-lato font-semibold text-[14px] text-black">₹{item.price}</td>
                                    <td className="flex justify-center items-center font-lato font-semibold text-[14px]">

                                        <div className={` w-[93px] text-center py-1 rounded-md capitalize
                                     ${item.status === "delivered" ? "bg-green"
                                                : item.status === "shipped" ? "bg-yellow"
                                                    : item.status === "processing" ? "bg-skyblue"
                                                        : item.status === "cancelled" ? "bg-lightred" : "bg-black"} text-white   `}>
                                            {item.status}
                                        </div>

                                    </td>

                                    <td className=" text-center font-lato font-semibold text-[14px]"><button onClick={() => {
                                        window.orderDetailModal.showModal()
                                    }} className="btn btn-sm btn-outline btn-primary rounded-md text-white">View Orders</button></td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <hr />
                    <div className="flex items-center justify-end   gap-3 mt-3">
                        <p className="font-lato font-semibold text-grey  text-[14px]">Showing 1-09 of 78</p>
                        <div className=" border-borderColor  join ">
                            <button className="border-[0.6px] rounded-l-lg  p-2  px-3  bg-smoke"><img src={leftCaret} /></button>
                            <button className="border-[0.6px] rounded-r-lg p-2  px-3 bg-smoke"><img src={rightCaret} alt="" /></button>
                        </div>
                    </div>

                </div>

            </div>





            {/* Order detail modal start */}


            <dialog id="orderDetailModal" className=" modal">
                <form method="dialog" className="rounded-lg border shadow-lg p-3 py-5 w-[1085px] bg-white">
                    <div className="">

                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <div className="grid  justify-center px-4 grid-cols-12">

                            <div className="col-span-4 overflow-y-auto px-4 py-6 h-[calc(100vh-80px)]">
                                <h1 className="font-lato  font-semibold text-center text-[24px]">Order Item</h1>
                                <div className="flex  flex-col justify-center ">
                                    <div className="">

                                        <div className="bg-darksmoke mt-8 rounded-lg shadow-md w-full h-[317px]">
                                            <img src={helmetImg} alt="" />
                                        </div>

                                        <div className="mt-3">

                                            <h2 className="font-semibold text-[18px] font-lato text-black">SG Optipro Cricket Helmet</h2>
                                            <div className="flex justify-between my-2  items-center">
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Price:</h3> <span className="text-stone">₹15000</span> </div>
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Qty:</h3> <span className="text-stone">1</span> </div>

                                            </div>
                                        </div>
                                        <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Product ID:</h3> <span className="text-stone">65f317a55deeaa0008f31cae</span> </div>
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
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Price:</h3> <span className="text-stone">₹15000</span> </div>
                                                <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Qty:</h3> <span className="text-stone">1</span> </div>

                                            </div>
                                        </div>
                                        <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Product ID:</h3> <span className="text-stone">65f317a55deeaa0008f31cae</span> </div>
                                    </div>

                                </div>

                            </div>




                            <div className="col-span-8  border-l-2 border-dashed">
                                <h1 className="font-lato font-semibold text-center text-[24px]" >Order Information</h1>

                                <div className="p-5 flex flex-col gap-2 justify-center px-7">

                                    <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Address:</h3> <span className="font-medium text-lightbrown">Tulsipur 4 Banahari Dang</span> </div>
                                    <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Landmark:</h3> <span className="font-medium text-lightbrown">Purvanchal Campus abc</span> </div>
                                    <div className="flex items-center font-lato  justify-between">
                                        <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">State:</h3> <span className=" text-lightbrown font-medium">Lumbini</span> </div>
                                        <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">City:</h3> <span className=" text-lightbrown font-medium">Tulsipur</span> </div>
                                        <div className="font-semibold  font-lato     flex items-center gap-1"><h3 className="text-black">Country:</h3> <span className=" text-lightbrown font-medium">India</span> </div>
                                    </div>
                                    <div className="font-semibold  flex items-center gap-1"><h3 className="text-black">Pin Code:</h3> <span className="font-medium text-lightbrown">22200</span> </div>

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