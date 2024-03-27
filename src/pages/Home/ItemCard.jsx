import React,{useState,useEffect} from 'react';
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../api/dashboard.js";

const ItemCard = (props) => {

  const { data:CardData, isloading } = useQuery({
    queryKey: ["CardData"],
    queryFn: () => getDashboard(),
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Sever not responding....",
        text: error,
      });
    },
    onSuccess: () => {
      
    },
  });
  
  return (
    <div className="w-full h-full relative">
        <div className="w-[262px] h-[127px] bg-white rounded-[14px] shadow" />
         <div className="w-[60px] h-[60px] left-[186px] top-[16px] absolute">
        <img className="w-[60px] h-[60px]  mix-blend-multiply rounded-[20px]" src={props.image} />
    </div>
    <div className="left-[16px] top-[16px] absolute opacity-70 text-neutral-800 text-base font-semibold font-['Lato']">{props.title}</div>
   {CardData?(<div className="left-[16px] top-[54px] absolute text-neutral-800 text-[28px] font-bold font-['Lato'] tracking-wide">{CardData[props.ID]}</div>):("")}
</div>
  ) 
}

export default ItemCard
