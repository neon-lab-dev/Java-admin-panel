import React,{useEffect, useState} from 'react'
import couponData from '../../assets/data/Coupondata.js'
import Searchbar from '../../components/Searchbar'
import downloadIcon from '../../assets/icon/download.svg'
import leftCaret from '../../assets/icon/leftCaret.svg'
import rightCaret from '../../assets/icon/rightCaret.svg'
import searchObjects from '../../assets/Function/search.js'
import coupon from '../../assets/icon/coupon.svg'
import createCoupon from '../../assets/icon/createCoupon.svg'

const Coupons = () => {
    const [dataDisplay,setdataDisplay] = useState(couponData);
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
        setdataDisplay(searchObjects(couponData,searchquery,["Code","ID"]));
    };

    useEffect(() => {
        setpage(1);
        setfilterData(dataDisplay.slice((page-1)*(i),(page)*i));
    }, [dataDisplay])
    
    const handleChange =(event)=>{
        setsearchquery(event.target.value);
        setdataDisplay(searchObjects(couponData,event.target.value,["Code","ID"]));
    }
    
  return (
    <div className='bg-[#F5F6FA] min-h-svh w-full p-6 pb-11'>
      <div className='flex justify-between'>
        <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>Total Coupons</h1>
        <button className="w-48 h-[50px] text-white bg-[#60AFBD] rounded-[6px]" onClick={()=>document.getElementById('create_new_coupon').showModal()}>
          <div className='flex items-center justify-center'>
          <img src={coupon}/>
          <p className="text-white text-sm font-semibold font-['Lato'] tracking-tight ml-[10px]">Create Coupon</p>
          </div>
        </button>
        {/*createCoupon Modal Start */}
          <dialog id="create_new_coupon" className="modal">
            <div className="modal-box lg:w-[763px] lg:h-[410px] sm:h-[1/6] w-5/6 max-w-5xl h-1/2 max-h-5xl">
              <form method="dialog" >
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <div className='flex h-full w-full'>
                <div className="w-2/5 flex justify-center items-center place-content-center">
                  <img src={createCoupon} className="h-full w-full"/>
                </div>
                <div className="border-l-2 border-dashed"/>
                <div className="w-3/5">
                  <div className=" flex flex-col place-content-center place-items-center">
                    <p className="w-[324px] text-start text-black text-2xl font-semibold font-['Lato'] tracking-tight">Create New Coupon</p>
                    <input className="mt-[32px] w-[324px] h-11 pl-3 bg-white rounded-xl border border-zinc-300 justify-start items-center inline-flex placeholder:text-black opacity-40 text-sm font-light font-['Lato'] leading-[16.80px]" type='text' placeholder='Enter New Coupon Code'/>
                    <input className="mt-[18px] w-[324px] h-11 pl-3 bg-white rounded-xl border border-zinc-300 justify-start items-center inline-flex placeholder:text-black opacity-40 text-sm font-light font-['Lato'] leading-[16.80px]" type='text' placeholder='Amount'/>
                    <button className="mt-[24px] w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 bg-slate-400 rounded-xl justify-center items-center inline-flex">
                      <p className="w-[100.56px] h-6 text-center text-white text-lg font-bold font-['Lato'] leading-snug">Create</p>
                    </button>
                    <button className="mt-[12px] w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex" onClick={()=>document.getElementById('verify_new_coupon').showModal()}>
                      <p className="w-[100.56px] h-6 text-center text-zinc-800 text-lg font-bold font-['Lato'] leading-snug">Verify</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        {/*create coupon Modal End */}
        {/*verify coupon Modal start */}
        <dialog id="verify_new_coupon" className="modal">
            <div className="modal-box lg:w-[763px] lg:h-[410px] sm:h-[1/6] w-5/6 max-w-5xl h-1/2 max-h-5xl">
              <div className='flex h-full w-full'>
                <div className="w-2/5 flex justify-center items-center place-content-center">
                  <img src={createCoupon} className="h-full w-full"/>
                </div>
                <div className="border-l-2 border-dashed"/>
                <div className="w-3/5">
                  <div className="h-full flex flex-col place-content-start place-items-start items-center">
                    <div className='w-4/5'>
                      <p className="mt-[50px] text-black text-2xl font-semibold font-['Lato'] tracking-tight">Verify &nbsp;the&nbsp; Coupon</p>
                      <p className='mt-[28px]'>
                        <span className=" text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                          Coupon &nbsp;Code :&nbsp;&nbsp;
                        </span>
                        <span className="text-black text-lg font-light font-['Lato'] tracking-tight">
                        421545185
                        </span>
                      </p>
                      <p className='mt-[18px]'>
                        <span className="text-black text-2xl font-semibold font-['Lato'] tracking-tight">
                          Amount :&nbsp;&nbsp;
                        </span>
                        <span className="text-black text-lg font-light font-['Lato'] tracking-tight">
                        ₹421
                        </span>
                      </p>
                      </div>
                      <div className="modal-action">
                        <form method="dialog" >
                          <button className="btn bg-white w-[324px] h-11 pl-[111px] pr-[112.44px] py-2.5 rounded-xl border border-neutral-400 justify-center items-center inline-flex">
                            <span className="w-[100.56px] h-6 text-center text-zinc-800 text-lg font-bold font-['Lato'] leading-snug" >
                              Close
                            </span>
                          </button>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
          {/* verify coupon modal ends */}
         
      </div>
    <div className="bg-white overflow-x-auto mt-3 rounded-[16px] p-4 px-5">

        <div className=" justify-between flex items-center ">
            {/* Searchbar */}
            <Searchbar placeholder={"Search by Coupon code or ID"} onChange={handleChange} onSubmit={handleSearch} value={searchquery}/>
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
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3 ">Coupon Code</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3">Amount</th>
                            <th className=" text-neutral-800 text-sm font-bold font-['Lato'] text-center px-3">Action</th>
                        </tr>
                    </thead>
                   
                    <tbody className='grid-col-5'>
                        {filterData.map((item) =>{
                            return (
                             <tr className="h-[48px] w-full items-center" key={item.ID}>
                            <td className="opacity-80 font-lato font-semibold text-[14px] w-1/5 min-w-[150px] text-black  text-start px-3">#{item.ID}</td>
                            <td className="opacity-80 font-lato font-semibold text-[14px] text-center w-1/5 min-w-[150px] text-black     px-3">{item.Code}</td>
                            <td className="opacity-80  font-lato font-semibold w-1/5 min-w-[150px] text-center text-[14px] px-3">₹{item.Amount}
                            </td>
                            <td className="opacity-80 w-1/5 min-w-[100px]">
                              <div className='flex place-content-center'>
                                <button>
                                  <img src={item.Action}/>
                                </button>
                              </div>
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

export default Coupons
