import React from 'react'

const ItemCard = (props) => {
    
  return (
    <div className="w-[262px] h-[127px] relative">
        <div className="w-[262px] h-[127px] left-0 top-0 absolute bg-white rounded-[14px] shadow" />
         <div className="w-[60px] h-[60px] left-[186px] top-[16px] absolute">
        <img className="w-[60px] h-[60px] left-0 top-0 absolute opacity-20 rounded-[20px]" alt="logo" src={`https://via.placeholder.com/60x60/${props.color}`} />
        <div className="w-[30px] h-[30px] left-[14px] top-[14px] absolute">
            <img className="" src={props.image} />
            {/* <img className="w-8 h-[10.67px] left-0 top-[13.33px] absolute" src="https://via.placeholder.com/32x11" /> */}
        </div>  
    </div>
    <div className="left-[16px] top-[16px] absolute opacity-70 text-neutral-800 text-base font-semibold font-['Lato']">{props.title}</div>
    <div className="left-[16px] top-[54px] absolute text-neutral-800 text-[28px] font-bold font-['Lato'] tracking-wide">{props.number}</div>
</div>
  )
}

export default ItemCard
