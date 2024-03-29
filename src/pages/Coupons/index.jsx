import React,{useEffect, useState} from 'react'
import icondelete from '../../assets/icon/delete.svg'
import Searchbar from '../../components/Searchbar'
import downloadIcon from '../../assets/icon/download.svg'
import leftCaret from '../../assets/icon/leftCaret.svg'
import rightCaret from '../../assets/icon/rightCaret.svg'
import searchObjects from '../../assets/Function/search.js'
import coupon from '../../assets/icon/coupon.svg'
import { getAllCoupon,deleteCoupon } from '../../api/coupon.js'
import { useQuery,useMutation} from "@tanstack/react-query";
import CouponModal from './couponModal.jsx'
import Swal from 'sweetalert2'
import removeItemById from '../../assets/Function/removeitem.js'
import AppLoading from '../../components/loaders/AppLoading.jsx'
import SomeErrorOccurred from '../Error/SomeErrorOccurred.jsx'
import Deleting from '../../components/loaders/Deleting.jsx'

const Coupons = () => {
    const [dataDisplay,setdataDisplay] = useState([]);
    const [totalDataOfUsers,settotalDataOfUsers] = useState(0);
    const [searchquery, setsearchquery] = useState("");
    const [page, setpage] = useState(1);
    let i=9;
    const [filterData,setfilterData] = useState(dataDisplay.slice((page-1)*(i),(page)*i));
    const [idToDelete, setidToDelete] = useState("");

    // API fetching
    const {
      data:allCouponsData,
      isLoading,
      isError,
      isSuccess
    } = useQuery({
      queryKey: ["coupons"],
      queryFn: () => getAllCoupon(),
    });
    
  // to change the data after fetching
    useEffect(() => {
      if (isSuccess) {
        setdataDisplay(allCouponsData.coupons);
      }
    }, [isSuccess]);
   
  // to delete the coupon
    const { mutate, isPending, isSuccess:couponDeleted} = useMutation({
      mutationKey: ["deleteCoupon"],
      mutationFn: (id) => deleteCoupon(id),
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      },
      onSuccess:()=>{
        const updatedData = [...dataDisplay]
        removeItemById(updatedData,idToDelete)
        setdataDisplay(updatedData);
      }
    });

    useEffect(() => {
      if(couponDeleted){
      Swal.fire({
        title: "Deleted!",
        text: `coupon has been deleted.`,
        icon: "success"
      });}
    
    }, [couponDeleted])
    
    
    // for deleting coupon
    const handleClick = (data) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          setidToDelete(data._id);
          mutate(data._id);
        }
      });
    };
  
    // pagination start
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
    // pagination end

    const handleSearch = (event) => {
        event.preventDefault();
        setdataDisplay(searchObjects(couponData,searchquery,["Code","ID"]));
    };

    const handleChange =(event)=>{
        setsearchquery(event.target.value);
        setdataDisplay(searchObjects(couponData,event.target.value,["Code","ID"]));
    }

    useEffect(() => {
        settotalDataOfUsers(dataDisplay.length)
        setpage(1);
        setfilterData(dataDisplay.slice((page-1)*(i),(page)*i));
    }, [dataDisplay])
    
    
  return (<>
    
    <div className='bg-[#F5F6FA] min-h-svh w-full p-6 pb-11'>
      <div className='flex justify-between'>
        <h1 className='font-lato text-[32px] font-bold text-black leading-[38.4px] '>Total Coupons</h1>
        <button className="w-48 h-[50px] text-white bg-[#60AFBD] rounded-[6px]" onClick={()=>document.getElementById('create_new_coupon').showModal()}>
          <div className='flex items-center justify-center'>
          <img src={coupon}/>
          <p className="text-white text-sm font-semibold font-['Lato'] tracking-tight ml-[10px]">Create Coupon</p>
          </div>
        </button>
        {/* couponModal */}
        <CouponModal setdataDisplay={setdataDisplay} dataDisplay={dataDisplay} allCouponsData={allCouponsData}/>
        
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
              { isLoading?(<AppLoading/>)
                :!isError && allCouponsData ?
                (<table className="table rounded-2xl bg-salte-100  w-full">
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
                            <>
                             <tr className="h-[48px] w-full items-center" key={item._id}>
                            <td className="opacity-80 font-lato font-semibold text-[14px] w-1/5 min-w-[150px] text-black  text-start px-3">#{item._id}</td>
                            <td className="opacity-80 font-lato font-semibold text-[14px] text-center w-1/5 min-w-[150px] text-black     px-3">{item.code}</td>
                            <td className="opacity-80  font-lato font-semibold w-1/5 min-w-[150px] text-center text-[14px] px-3">₹{item.amount}
                            </td>
                            <td className="opacity-80 w-1/5 min-w-[100px]">
                              <div className='flex place-content-center'>
                                <button onClick={()=>handleClick(item)}>
                                  {(isPending&&item._id==idToDelete)?(<Deleting/>):(<img src={icondelete}/>)}
                                </button>
                              </div>
                            </td>
                        </tr>
                        </>
                        );
                        })}
                    </tbody>
                </table>)
                :(<SomeErrorOccurred/>)
              }
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
      </div></>
  )
}

export default Coupons
