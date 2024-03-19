import ItemCard from "./ItemCard";
import { useState,useEffect } from "react";
import dashboardData from '../../assets/data/dashboardData.js'
const Home = () => {
  
  
  return ( 
  <div className="text-primary bg-[#F5F6FA] h-screen w-full px-6 py-2">
    <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">Java Sports Admin Dashboard</div>
    <div className="grid  xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4 py-[33px] ">
      {dashboardData.map((element)=>{
        return(
          <div key={element.title}>
              <ItemCard image={element.image} title={element.title} number={element.number}/>
          </div>
        )
      })}
    </div>
    
  </div>);
};
export default Home;