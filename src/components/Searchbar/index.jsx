import React from 'react'
import SeachIcon from "../../assets/icons/searchIcon.svg"


const Searchbar = ({ placeholder }) => {
    return (
        <div className="flex  border-[0.6px] border-[#D5D5D5] bg-lightgray h-[38px] rounded-full  items-center gap-2 ps-3 sm:max-w-[388px] md:w-[388px]">
            <img className="h-[15.01px] w-[15.01px]" src={SeachIcon} alt="" />
            <input className="w-full me-3 border-none focus:outline-none font-lato text-[14px] font-medium bg-lightgray  " placeholder={placeholder} type="text" />
        </div>

    )
}

export default Searchbar