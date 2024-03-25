import Sidebar from "../navbar/Sidebar";
import Header from "../navbar/Header";
import { useInnerSize } from "../Hooks/InnerSizeHook";
import Error from "../../pages/Error";
import { useNavigate } from "react-router-dom";

const RootLayout = ({ children }) => {
  let size = useInnerSize();
  let navigate = useNavigate();
  if(size.width < 700 || size.height<500) {
    navigate("*")
    return (
      <Error/>
    )
  }
    return (
      <div className="flex h-screen">
      {/* 👉  w-dvw */}
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-y-scroll">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
  
};
export default RootLayout;
