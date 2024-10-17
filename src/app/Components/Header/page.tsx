import { CiSearch } from "react-icons/ci";

import { FaChair } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";

{
}

const Header = () => {
  return (
    <div className="shadow w-full fixed top-0 left-0">
      <div className="flex items-center justify-between  bg-white py-4 md:px-10 px-7 ">
        <div className=" text-3xl font-bold cursor-pointer flex items-center text-gray-950  px-40">
          <span className="text-3xl  text-gray-950 mr-1 pt-2 space-x-60  ">
            <FaChair className="text-green-600" />
          </span>
          Comforty
        </div>
        <div className=" flex items-center border border-slate-300 rounded-md w-96 shadow-sm ">
          <input
            className=" placeholder: placeholder:text-slate-400  rounded-md py-2 pl-4 pr-3  w-full focus:outline-none  shadow-sm  sm:text-sm items-center  justify-center  "
            placeholder="Search here..."
            type="text"
            name="search"
          />
          <CiSearch className="text-gray-400 mr-4" />
        </div>

        <FaCartArrowDown />
        <CiHeart />
        <MdOutlinePersonOutline />
      </div>
    </div>
  );
};

export default Header;
