import React,{useState,useEffect} from 'react';

const ItemCard = (props) => {

  
  
  return (
    <div className="w-full h-full relative">
        <div className="w-[262px] h-[127px] bg-white rounded-[14px] shadow" />
         <div className="w-[60px] h-[60px] left-[186px] top-[16px] absolute">
        <img className="w-[60px] h-[60px]  mix-blend-multiply rounded-[20px]" src={props.image} />
    </div>
    <div className="left-[16px] top-[16px] absolute opacity-70 text-neutral-800 text-base font-semibold font-['Lato']">{props.title}</div>
    <div className="left-[16px] top-[54px] absolute text-neutral-800 text-[28px] font-bold font-['Lato'] tracking-wide">{props.CardData[props.queryKey]}</div>
</div>
  ) 
}

export default ItemCard
