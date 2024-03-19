import filterIcon from "../../assets/icons/filter.svg"
import downCaret from "../../assets/icons/downCaret.svg"
import leftCaret from "../../assets/icons/leftCaret.svg"
import rightCaret from "../../assets/icons/rightCaret.svg"
import downloadIcon from "../../assets/icons/download.svg"
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










            {/* Order detail modal end */}






        </div>
    )
}

export default Orders