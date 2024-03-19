import React from 'react'
import userData from '../../assets/data/Userdata'

const User = () => {
  return (
    <div className='bg-lightgray h-full w-full p-6 pb-11'>
    <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>Total Orders</h1>

    <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

        <div className=" justify-between flex items-center ">
            {/* Searchbar */}
            {/* <Searchbar placeholder={"Search by Name Phone or id"} /> */}

            <div className="flex items-center gap-3">
                <div className="w-[199px]  rounded-[10px]">
                    <div className=" bg-darksmoke flex items-center gap-2 rounded-[10px] border-[0.6px] border-borderColor">
                        <div className="h-full px-3 py-[10px]   border-r border-r-borderColor">
                            <img className=" " src="filtericon" alt="" />
                        </div>
                    </div>
                </div>

                {/* downloadIcon */}
                <button className=" bg-lightgray  rounded-[6px]">
                    <img src="downloadIcon" alt="" />
                </button>
            </div>
        </div>
        {/* User table */}
        <div className="mt-4">
            <div className="overflow-x-auto">
                <table className="table rounded-2xl w-full">
                    {/* head */}
                    <thead className="grid-col-5">
                        <tr className="h-[48px] bg-slate-100 rounded-xl w-full items-center">
                            <th className="font-bold font-lato text-black text-[14px] ">ID</th>
                            <th className="font-bold font-lato text-black text-[14px] ">Name</th>
                            <th className="font-bold text-center font-lato text-black text-[14px] ">Email</th>
                            <th className="font-bold text-center font-lato text-black text-[14px] ">Mobile No</th>
                            <th className="font-bold text-center font-lato text-black text-[14px]">DOB</th>
                        </tr>
                    </thead>
                    <tbody className='grid-col-5'>
                        {userData.map(item => <tr className="  h-[48px]  w-full items-center">
                            <td className="font-lato font-semibold text-[14px] text-black">{item.ID}</td>
                            <td className="font-lato font-semibold text-[14px] text-black">₹{item.Name}</td>
                            <td className=" font-lato font-semibold text-[14px]">{item.Email}
                            </td>
                            <td className=" font-lato font-semibold text-[14px]">{item.Mobile}
                            </td>
                            <td className=" font-lato font-semibold text-[14px]">{item.DOB}
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="flex items-center justify-end   gap-3 mt-3">
                <p className="font-lato font-semibold text-grey  text-[14px]">Showing 1-09 of 78</p>
                <div className=" border-borderColor  join ">
                    <button className="border-[0.6px] rounded-l-lg  p-2  px-3  bg-smoke"><img src="leftCaret" /></button>
                    <button className="border-[0.6px] rounded-r-lg p-2  px-3 bg-smoke"><img src="rightCaret" alt="" /></button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default User
