import logo from "../../assets/icon/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const links = [
    {
      label: "Dashboard",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Orders",
      path: "/orders",
    },
    {
      label: "Users",
      path: "/users",
    },
    {
      label: "Coupons",
      path: "/coupons",
    },
  ];

  return (
    <aside className="lg:min-w-[242px] max-w-[242px] md:min-w-[200px] hidden md:block bg-white h-screen">
      <Link to="/" className="flex justify-center">
        <img className="my-4" src={logo} />
      </Link>
      <div className="flex flex-col gap-3 items-center justify-center mt-6 px-5">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`w-full relative rounded-md text-neutral-800 text-sm font-semibold tracking-tight text-center py-3.5 ${pathname === link.path && "bg-primary text-white"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="bg-[#E0E0E0] h-px my-[18px]"></div>
      <div className=" justify-center items-center flex">
        <button
          className={`w-5/6 h-[50px] relative rounded-md text-neutral-800 text-sm font-semibold font-['Lato'] tracking-tight `}
        >
          Logout
        </button>
      </div>
    </aside>
    
  );
};

export default Sidebar;
