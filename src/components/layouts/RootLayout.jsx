import Sidebar from "../navbar/Sidebar";
import Header from "../navbar/Header";
import { useInnerSize } from "../../hooks/useInnerSize";
import { Navigate, useLocation } from "react-router-dom";
import NotSupported from "../../pages/Error/NotSupported";
import { useSelector } from "react-redux";
import AppLoading from "../loaders/AppLoading";

const RootLayout = ({ children }) => {
  const { isAuthenticating, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const { pathname } = useLocation();
  const size = useInnerSize();
  if (size.width < 768 || size.height < 500) {
    return <NotSupported />;
  }
  if (isAuthenticating) return <AppLoading />;
  if (pathname === "/login") return children;
  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="flex h-screen">
      {/* 👉  w-dvw */}
      <Sidebar />
      <div className="flex flex-col flex-grow overflow-y-scroll h-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default RootLayout;
