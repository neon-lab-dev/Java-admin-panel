import ItemCard from "./ItemCard";
import dashboardData from "../../assets/data/dashboardData.js";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../api/dashboard.js";
import AppLoading from "../../components/loaders/AppLoading.jsx";
import SomeErrorOccurred from "../Error/SomeErrorOccurred.jsx";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: () => getDashboard(),
  });

  return (
    <div className="text-primary bg-[#F5F6FA] h-full w-full px-6 py-2">
      <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">
        Java Sports Admin Dashboard
      </div>
      {isLoading ? (
        <AppLoading />
      ) : !isError && data ? (
        <div className="flex flex-wrap gap-[30px] py-[33px] ">
          {dashboardData.map((element) => {
            return (
              <ItemCard
                key={element.title}
                image={element.image}
                title={element.title}
                data={data[element.queryKey]}
              />
            );
          })}
        </div>
      ) : (
        <SomeErrorOccurred />
      )}
    </div>
  );
};
export default Home;
