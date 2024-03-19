import SeachIcon from "../../assets/icons/searchIcon.svg"
import avatar from "../../assets/icons/avatar.svg"
import Searchbar from "../Searchbar";


const Header = () => {

  return (
    <header className="h-[70px] bg-white border-b-black w-full">

      <div className="flex items-center md:ps-11  md:pe-7 justify-between h-full">

        {/* input with search icon */}
        <Searchbar placeholder={"Search"} />



        {/* user Name and avatar */}
        <div className="flex items-center gap-3">

          <img className="h-[44px] w-[44px] rounded-full bg-gray-100" src={avatar} alt="" />

          <div className="flex flex-col justify-center">
            <h1 className="font-bold font-lato text-[14px] ">Kabir Sah</h1>
            <p className="text-[12px] font-lato font-semibold text-brown ">Admin</p>
          </div>
        </div>

      </div>




    </header>
  );
};
export default Header;
