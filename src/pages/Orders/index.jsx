import filterIcon from "../../assets/icons/filter.svg"
import { RxCaretDown } from "react-icons/rx";
import { RiDownload2Fill } from "react-icons/ri";
import { PiCaretRight } from "react-icons/pi";
import { PiCaretLeft } from "react-icons/pi";
import Searchbar from "../../components/Searchbar";




const Orders = () => {


    const ORDER_DATA = [
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
        { id: "#65f317a55deeaa0009931cae", price: "12.09.2019 - 12.53 PM", status: "processing", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "shipped", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "cancelled", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
        { id: "#65f317a55deeaa0008f31cae", price: "12.09.2019 - 12.53 PM", status: "delivered", },
    ]





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
                                <div className="h-full    border-r border-r-borderColor">
                                    <img className="p-2 px-3 " src={filterIcon} alt="" />
                                </div>
                                <div role="button" tabIndex={0} className="flex dropdown dropdown-bottom justify-between pr-3 w-full items-center">
                                    <div className="font-bold text-[14px] w-full font-lato text-black" >

                                        <div className="flex items-center w-full ">
                                            <div className=" m-1">All (10)</div>
                                            <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-md w-full">
                                                <li className="p-2 rounded-md hover:bg-red">Delivered (10)</li>
                                                <li className="p-2 rounded-md hover:bg-red">Shipped (10)</li>
                                                <li className="p-2 rounded-md hover:bg-red">Processing (10)</li>
                                                <li className="p-2 rounded-md hover:bg-red">Cancelled (10)</li>
                                            </ul>
                                        </div>



                                    </div>
                                    <RxCaretDown className="font-bold" />
                                </div>
                                {/* 👇 droptdown as a select box  */}
                                {/* <div className="">

                                    <select className="bg-darksmoke font-bold text-[14px]   font-lato text-black selection:bg-red-300 px-1  outline-none w-full indicator" name="" id="">
                                        <option style={{
                                            display: "inline-block",
                                            padding: 10
                                        }} className=" " value="">All (10)</option>
                                        <option className="" value="">Delivered (10)</option>
                                        <option className=" " value="">Shipped (10)</option>
                                        <option className=" " value="">Processing (10)</option>
                                        <option className="" value="">Cancelled (10)</option>
                                    </select>
                                </div> */}


                            </div>
                        </div>

                        {/* downloadIcon */}
                        <div className="border-[0.6px] border-borderColor bg-lightgray p-1 rounded-[6px]">
                            <RiDownload2Fill />
                        </div>

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
                                    <td className="font-lato font-semibold text-[14px] text-black">12.09.2019 - 12.53 PM</td>
                                    <td className="text-center font-lato font-semibold text-[14px]"><button className={`btn btn-sm w-[93px] capitalize ${item.status === "delivered" ? "btn-success" : item.status === "shipped" ? "btn-warning" : item.status === "processing" ? "btn-info" : item.status === "cancelled" ? "btn-error" : "btn-neutral"} text-white      `}>{item.status}</button></td>
                                    <td className=" text-center font-lato font-semibold text-[14px]"><button className="btn btn-sm btn-outline btn-primary rounded-md text-white">View Orders</button></td>
                                </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                    <hr />
                    <div className="flex items-center justify-end   gap-3 mt-3">
                        <p className="font-lato font-semibold text-grey  text-[14px]">Showing 1-09 of 78</p>
                        <div className=" border-borderColor join ">
                            <button className="border-[0.6px] p-2  px-3  bg-smoke"><PiCaretLeft className="text-grey" /></button>
                            <button className="border-[0.6px] p-2  px-3 bg-smoke"><PiCaretRight className="text-grey font-extrabold" /></button>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Orders