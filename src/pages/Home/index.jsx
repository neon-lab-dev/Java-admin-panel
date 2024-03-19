import ItemCard from "./ItemCard";
import { useState } from "react";
import icon1 from '../../assets/icon/Icon1.svg';
import icon2 from '../../assets/icon/Icon2.svg';
import icon3 from '../../assets/icon/Icon3.svg';
import icon4 from '../../assets/icon/Icon4.svg';
import icon5 from '../../assets/icon/Icon5.svg';
import icon6 from '../../assets/icon/Icon6.svg';
import icon7 from '../../assets/icon/Icon7.svg';
import icon8 from '../../assets/icon/Icon8.svg';
import icon9 from '../../assets/icon/Icon9.svg';
const Home = () => {
  const [data, setdata] = useState([
    {
      color:"8280FF",
      image:icon1,
      title:"Total User",
      number:"40,689"
    },{
      color:"FEC53D",
      image:icon2,
      title:"Total Products",
      number:"64"
    },{
      color:"18AD8A",
      image:icon3,
      title:"Total Revenue",
      number:"₹ 89,000"
    },{
      color:"FF6B6B",
      image:icon4,
      title:"Total cancellation",
      number:"₹ 2040"
    },{
      color:"FEC53D",
      image:icon5,
      title:"Total Order",
      number:"10293"
    },{
      color:"4AD991",
      image:icon6,
      title:"Orders delivred",
      number:"89,000"
    },{
      color:"FF9066",
      image:icon7,
      title:"Orders Pending",
      number:"2040"
    },{
      color:"A9A9A9",
      image:icon8,
      title:"Orders cancelled",
      number:"2040"
    },{
      color:"0047AB",
      image:icon9,
      title:"Order Shipped",
      number:"10293"
    }

  ]);
  return ( 
  <div className="text-primary bg-[#F5F6FA] h-[670px] w-full px-6 py-2">
    <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">Java Sports Admin Dashboard</div>
    <div className="grid grid-cols-4">
      {data.map((element)=>{
        return(
          <div className=" py-5" key={element.title}>
              <ItemCard color={element.color} image={element.image} title={element.title} number={element.number}/>
          </div>
        )
      })}
    </div>
    
  </div>);
};
export default Home;
