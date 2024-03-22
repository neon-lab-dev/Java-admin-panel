import React,{useEffect, useState} from 'react'
import userData from '../../assets/data/Userdata.js'
import Searchbar from '../../components/Searchbar'
import downloadIcon from '../../assets/icon/download.svg'
import leftCaret from '../../assets/icon/leftCaret.svg'
import rightCaret from '../../assets/icon/rightCaret.svg';
import searchObjects from '../../assets/Function/search.js'

const User = () => {
    const [dataDisplay,setdataDisplay] = useState(userData);
    const totalDataOfUsers = dataDisplay.length;
    const [searchquery, setsearchquery] = useState("");
    const [page, setpage] = useState(1);
    let i=9;
    const [filterData,setfilterData] = useState(dataDisplay.slice((page-1)*(i),(page)*i));

    useEffect(() => {
        setfilterData(dataDisplay.slice((page-1)*(i),(page)*i))
    }, [page])
    
    const handleNextPage=()=>{
        if(page<(totalDataOfUsers/9)){
            setpage(page+1);
        }
    }

    const handlePrevPage=()=>{
        if(page>1){
            setpage(page-1)
        }
    }  

    const handleSearch = (event) => {
        event.preventDefault();
        setdataDisplay(searchObjects(userData,searchquery,["Name","ID","Mobile"]));
    };

    useEffect(() => {
        setpage(1);
        setfilterData(dataDisplay.slice((page-1)*(i),(page)*i));
    
    }, [dataDisplay])
    
    const handleChange =(event)=>{
        setsearchquery(event.target.value);

    }
    
  return (
    <div className='bg-[#F5F6FA] min-h-svh w-full p-6 pb-11'>
    <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>All Users</h1>

    <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

        <div className=" justify-between flex items-center ">
            {/* Searchbar */}
            <Searchbar placeholder={"Search by Name Phone or id"} onChange={handleChange} onSubmit={handleSearch} value={searchquery}/>
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
                    
                    <thead className="grid-col-5">
                        <tr className="h-[48px] bg-slate-100 rounded-xl w-full items-center">
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-start px-3 ">ID</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3 ">Name</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-start px-3">Email</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3">Mobile No</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3">DOB</th>
                        </tr>
                    </thead>
                   
                    <tbody className='grid-col-5'>
                        {filterData.map((item) =>{
                            return (
                             <tr className="  h-[48px]  w-full items-center" key={item.ID}>
                            <td className="opacity-80 font-lato font-semibold text-[14px] w-1/5 min-w-[150px] text-black  text-start px-3">#{item.ID}</td>
                            <td className="opacity-80 font-lato font-semibold text-[14px] text-center w-1/5 min-w-[150px] text-black     px-3">{item.Name}</td>
                            <td className="opacity-80  font-lato font-semibold w-1/5 min-w-[150px] text-satrt text-[14px] px-3">{item.Email}
                            </td>
                            <td className="opacity-80 font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.Mobile}
                            </td>
                            <td className="opacity-80 font-lato font-semibold w-1/5 min-w-[100px] text-center text-[14px] px-3">{item.DOB}
                            </td>
                        </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="flex items-center justify-end   gap-3 mt-3">
                <p className="font-lato font-semibold text-grey opacity-60 text-[14px]">Showing {(totalDataOfUsers===0)?"0":(page*9-8)}-{(page*9<totalDataOfUsers)?(page*9):(totalDataOfUsers)} of {totalDataOfUsers}</p>
                <div className=" border-borderColor  join ">
                    <button disabled={page<1} className="border-[0.6px] rounded-l-lg  p-2  px-3 bg-smoke" onClick={handlePrevPage}><img className={`${(page<2)?"opacity-40":"opacity-90"}`} src={leftCaret} /></button>
                    <button disabled={page>(totalDataOfUsers/9)} className="border-[0.6px] rounded-r-lg p-2 px-3 bg-smoke"  onClick={handleNextPage}><img className={`${(page>Math.ceil((totalDataOfUsers/9)-1))?"opacity-40":"opacity-90"}`} src={rightCaret} alt=""/></button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default User
