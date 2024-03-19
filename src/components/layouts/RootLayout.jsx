import Sidebar from "../navbar/Sidebar";
import Header from "../navbar/Header";

const RootLayout = ({ children }) => {
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
