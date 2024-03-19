import ItemCard from "./ItemCard";
import { useState,useEffect } from "react";
import dashboardData from '../../assets/data/dashboardData.js'
const Home = () => {
  const [data, setdata] = useState([]);
  const getData = async ()=>{
    setdata(data.concat(dashboardData))
  }
  useEffect(() => {
    getData();
  }, [])
  
  return ( 
  <div className="text-primary bg-[#F5F6FA] h-screen w-full px-6 py-2">
    <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">Java Sports Admin Dashboard</div>
    <div className="grid grid-cols-4 gap-4">
      {data.map((element)=>{
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
