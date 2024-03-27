  import ItemCard from "./ItemCard";
  import dashboardData from '../../assets/data/dashboardData.js';
  import { useQuery } from "@tanstack/react-query";
  import { getDashboard } from "../../api/dashboard.js";
 
  const Home = () => {
    const { data:CardData, isLoading,isError} = useQuery({
      queryKey: ["CardData"],
      queryFn: () => getDashboard(),
    });
    
    return ( 
    <div className="text-primary bg-[#F5F6FA] min-h-svh w-full px-6 py-2">
      <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">Java Sports Admin Dashboard</div>
        {isLoading?(<div className="flex justify-center items-center">Loading Data...</div>):CardData?(<div className="flex flex-wrap gap-[30px] py-[33px] ">
          {dashboardData.map((element)=>{
            return(
              <div key={element.title}>
                  <ItemCard image={element.image} title={element.title} CardData={CardData} queryKey={element.queryKey}/>
              </div>
            )
          })}
      </div>):("")}
      
    </div>);
  };
  export default Home;
