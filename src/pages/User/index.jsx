import React, { useEffect, useState } from 'react'
import Searchbar from '../../components/Searchbar'
import downloadIcon from '../../assets/icon/download.svg'
import leftCaret from '../../assets/icon/leftCaret.svg'
import rightCaret from '../../assets/icon/rightCaret.svg';
import searchObjects from '../../assets/Function/search.js'
import { getUserDetails } from '../../api/user.js'
import { useQuery} from "@tanstack/react-query";
import AppLoading from "../../components/loaders/AppLoading.jsx";
import SomeErrorOccurred from "../Error/SomeErrorOccurred.jsx"
import jsonToXlsx from '../../utils/jsonAsXlsx.js';


const User = () => {
    
    const [dataDisplay, setdataDisplay] = useState([]);
    const [totalDataOfUsers,settotalDataOfUsers] = useState(0);
    const [searchquery, setsearchquery] = useState("");
    const [page, setpage] = useState(1);
    let i = 9;
    const [filterData, setfilterData] = useState(dataDisplay.slice((page - 1) * (i), (page) * i));

    //api fetching
    const {
        data:allUserData,
        isLoading,
        isError,
        isSuccess
      } = useQuery({
        queryKey: ["users"],
        queryFn: () => getUserDetails(),
    });
    
    // to change the data after fetching
    useEffect(() => {
        if (isSuccess) {
          setdataDisplay(allUserData.users);
        }
      }, [isSuccess]);
    
    // pagination -start 
    useEffect(() => {
        setfilterData(dataDisplay.slice((page - 1) * (i), (page) * i))
    }, [page])

    const handleNextPage = () => {
        if (page < (totalDataOfUsers / 9)) {
            setpage(page + 1);
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setpage(page - 1)
        }
    }
    // pagination end

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(dataDisplay)
        setdataDisplay(searchObjects(dataDisplay, searchquery, ["full_name", "_id", "phoneNo"]));
    };

    const handleChange = (event) => {
        setsearchquery(event.target.value);
        console.log(dataDisplay)
        setdataDisplay(searchObjects(dataDisplay, event.target.value, ["full_name", "_id", "phoneNo"]));
    }
    useEffect(() => {
        settotalDataOfUsers(dataDisplay.length)
        setpage(1);
        setfilterData(dataDisplay.slice((page - 1) * (i), (page) * i));
    }, [dataDisplay])

    return (
        <div className='bg-[#F5F6FA] min-h-svh w-full p-6 pb-11'>
            <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>All Users</h1>

            <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

                <div className=" justify-between flex items-center ">
                    {/* Searchbar */}
                    <Searchbar placeholder={"Search by Name Phone or id"} onChange={handleChange} onSubmit={handleSearch} value={searchquery} />
                    <div className="flex items-center gap-3">
                        {/* downloadIcon */}
                        <button
                        onClick={()=>jsonToXlsx(dataDisplay,"users")}
                        className=" bg-lightgray  rounded-[6px]">
                            <img src={downloadIcon} alt="" />
                        </button>
                    </div>
                </div>
                {/* User table */}
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        { isLoading?(<AppLoading/>)
                            :!isError && allUserData ?(
                            <table className="table rounded-2xl bg-salte-100  w-full">
                                {/* head */}

                                <thead className="grid-col-5 ">
                                    <tr className="h-[48px] bg-slate-100 w-full items-center">
                                        <th className="font-bold font-lato text-black text-[14px] text-start px-3 ">ID</th>
                                        <th className="font-bold font-lato text-black text-[14px] text-center px-3 ">Name</th>
                                        <th className="font-bold font-lato text-black text-[14px]  text-end px-3">Email</th>
                                        <th className="font-bold font-lato text-black text-[14px]  text-end px-3">Mobile No</th>
                                        <th className="font-bold font-lato text-black text-[14px]  text-center px-3">DOB</th>
                                    </tr>
                                </thead>

                                <tbody className='grid-col-5'>
                                    {filterData.map((item) => {
                                        return (
                                            <tr className="  h-[48px]  w-full items-center" key={item._id}>
                                                <td className="opacity-80 font-lato font-semibold text-[14px] w-1/5 min-w-[150px] text-black  text-start px-3">#{item._id}</td>
                                                <td className="opacity-80 font-lato font-semibold text-[14px] text-center w-1/5 min-w-[150px] text-black     px-3">{item.full_name}</td>
                                                <td className="opacity-80  font-lato font-semibold w-1/5 min-w-[150px] text-satrt text-[14px] px-3">{item.email}
                                                </td>
                                                <td className="opacity-80 font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.phoneNo}
                                                </td>
                                                <td className="opacity-80 font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.dob}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>)
                            :(<SomeErrorOccurred />)
                        }
                    </div>
                    <hr />
                    <div className="flex items-center justify-end   gap-3 mt-3">
                        <p className="font-lato font-semibold text-grey opacity-60 text-[14px]">Showing {(totalDataOfUsers === 0) ? "0" : (page * 9 - 8)}-{(page * 9 < totalDataOfUsers) ? (page * 9) : (totalDataOfUsers)} of {totalDataOfUsers}</p>
                        <div className=" border-borderColor  join ">
                            <button disabled={page < 1} className="border-[0.6px] rounded-l-lg  p-2  px-3 bg-smoke" onClick={handlePrevPage}><img className={`${(page < 2) ? "opacity-40" : "opacity-90"}`} src={leftCaret} /></button>
                            <button disabled={page > (totalDataOfUsers / 9)} className="border-[0.6px] rounded-r-lg p-2 px-3 bg-smoke" onClick={handleNextPage}><img className={`${(page > Math.ceil((totalDataOfUsers / 9) - 1)) ? "opacity-40" : "opacity-90"}`} src={rightCaret} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
