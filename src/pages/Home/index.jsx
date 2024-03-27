import ItemCard from "./ItemCard";
import dashboardData from "../../assets/data/dashboardData.js";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../../api/dashboard.js";
import AppLoading from "../../components/loaders/AppLoading.jsx";
import SomeErrorOccurred from "../Error/SomeErrorOccurred.jsx";
const Home = () => {
  const {
    data: cardData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cardData"],
    queryFn: () => getDashboard(),
  });

  return (
    <div className="text-primary bg-[#F5F6FA] min-h-svh w-full px-6 py-2">
      <div className="text-neutral-800 text-[32px] font-bold font-['Lato']">
        Java Sports Admin Dashboard
      </div>
      {isLoading ? (
        <AppLoading />
      ) : !isError && cardData ? (
        <div className="flex flex-wrap gap-[30px] py-[33px] ">
          {dashboardData.map((element) => {
            return (
              <div key={element.title}>
                <ItemCard
                  image={element.image}
                  title={element.title}
                  data={cardData[element.queryKey]}
                />
              </div>
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
