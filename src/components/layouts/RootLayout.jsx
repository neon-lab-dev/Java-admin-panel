import Sidebar from "../navbar/Sidebar";
import Header from "../navbar/Header";
import { useInnerSize } from "../../hooks/useInnerSize";
import { useLocation } from "react-router-dom";
import NotSupported from "../../pages/Error/NotSupported";

const RootLayout = ({ children }) => {
  const { pathname } = useLocation();
  if (pathname === "/login") return children;

  let size = useInnerSize();
  if (size.width < 768 || size.height < 500) {
    return <NotSupported />;
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
