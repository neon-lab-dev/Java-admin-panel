import React,{useEffect, useState} from 'react'
import  searchResults from '../../assets/data/Userdata'
import Searchbar from '../../components/Searchbar'
import downloadIcon from '../../assets/icon/download.svg'
import leftCaret from '../../assets/icon/leftCaret.svg'
import rightCaret from '../../assets/icon/rightCaret.svg'

const User = () => {
    const totalDataOfUsers = searchResults.length;
    const [page, setpage] = useState(0);
    let i=9;
    const [filterData,setfilterData] = useState(searchResults.slice((page)*(i),(page+1)*i));

    const handleNextPage=()=>{
        setpage(page+1);
        setfilterData(searchResults.slice(page*(i),(page+1)*i))
    }
    useEffect(() => {
      console.log(filterData);
    
    }, [filterData])
    
    const handlePrevPage=()=>{
        setpage(page-1)
        setfilterData(searchResults.slice(page*(i),(page+1)*i))
    }
    
  return (
    <div className='bg-[#F5F6FA] h-full w-full p-6 pb-11'>
    <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>All Users</h1>

    <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

        <div className=" justify-between flex items-center ">
            {/* Searchbar */}
            <Searchbar placeholder={"Search by Name Phone or id"} />

            <div className="flex items-center gap-3">
                {/* downloadIcon */}
                <button className=" bg-lightgray  rounded-[6px]">
                    <img src={downloadIcon} alt="" />
                </button>
            </div>
        </div>
        {/* User table */}
        <div className="mt-4">
            <div className="overflow-x-auto">
                <table className="table rounded-2xl bg-salte-100  w-full">
                    {/* head */}
                    
                    <thead className="grid-col-5 ">
                        <tr className="h-[48px] bg-slate-100 rounded-xl w-full items-center">
                            <th className="font-bold font-lato text-black text-[14px] text-start px-3 ">ID</th>
                            <th className="font-bold font-lato text-black text-[14px] text-center px-3 ">Name</th>
                            <th className="font-bold font-lato text-black text-[14px] text-start px-3">Email</th>
                            <th className="font-bold font-lato text-black text-[14px] text-strat px-3">Mobile No</th>
                            <th className="font-bold font-lato text-black text-[14px] text-center px-3">DOB</th>
                        </tr>
                    </thead>
                   
                    <tbody className='grid-col-5'>
                        {filterData.map((item) =>{
                            return (
                             <tr className="  h-[48px]  w-full items-center">
                            <td className="font-lato font-semibold text-[14px] w-1/5 min-w-[150px] text-black  text-start px-3">#{item.ID}</td>
                            <td className="font-lato font-semibold text-[14px] text-center w-1/5 min-w-[150px] text-black     px-3">{item.Name}</td>
                            <td className=" font-lato font-semibold w-1/5 min-w-[150px] text-satrt text-[14px] px-3">{item.Email}
                            </td>
                            <td className=" font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.Mobile}
                            </td>
                            <td className=" font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.DOB}
                            </td>
                        </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="flex items-center justify-end   gap-3 mt-3">
                <p className="font-lato font-semibold text-grey  text-[14px]">Showing {1+page*9}-{9+page*9} of {totalDataOfUsers}</p>
                <div className=" border-borderColor  join ">
                    <button disabled={page<=0} className="border-[0.6px] rounded-l-lg  p-2  px-3 bg-smoke" onClick={handlePrevPage}><img src={leftCaret} /></button>
                    <button disabled={page>=(totalDataOfUsers/9)} className="border-[0.6px] rounded-r-lg p-2 px-3 bg-smoke"  onClick={handleNextPage}><img src={rightCaret} alt=""/></button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default User
