import React,{useEffect, useState} from 'react'
import SeachIcon from "../../assets/icons/searchIcon.svg";
import searchObjects from '../../assets/Function/search';
const Searchbar = (props) => {
    
    return (
        <form className="flex  border-[0.6px] border-[#D5D5D5] bg-lightgray h-[38px] rounded-full  items-center gap-2 ps-3 sm:max-w-[388px] md:w-[388px]" onSubmit={props.onSubmit}>
            <button className="h-[15.01px] w-[15.01px] " onClick={props.onSubmit}>
                <img  src={SeachIcon} alt="" />
            </button>
            <input className="w-full me-3 border-none focus:outline-none font-lato text-[14px] font-medium bg-lightgray " type="text" {...props} />
        </form>

    )
}

export default Searchbar