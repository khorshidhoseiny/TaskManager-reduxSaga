import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import ProfileImg from "./../image/profile.webp";
import Toggle from "../common/ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from "./features/TodoSlice";

const NavBar = ({ open, setOpen }) => {
  const { searchTerm } = useSelector((state) => state.todos);
  const dispatch=useDispatch();
  const [searchInputToggle, setSearchInputToggle] = useState(false);

  return (
    <div className="w-full  text-slate-700  bg-white border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300 h-12/5 mr-3 flex justify-between items-center px-5">
      <ul className="flex items-center justify-center transition-all duration-500 ease-in relative gap-x-2 ">
        <li
          onClick={() => setOpen(!open)}
          className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 "
        >
          <GiHamburgerMenu className="text-2xl" />
        </li>
        <li className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 flex items-center gap-x-1">
          <MdSpaceDashboard className="text-2xl" />
          <p className="font-semibold text-lg hidden md:block">Dashboard</p>
        </li>
        <li className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 flex items-center gap-x-1">
          <BsCollectionFill className="text-2xl" />
          <p className="font-semibold text-lg hidden md:block">Collections</p>
        </li>
      </ul>
      <ul className="flex gap-x-2 items-center justify-center ">
        <li className=" hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg ">
          {<Toggle />}
        </li>
        <li
          onClick={() => setSearchInputToggle(!searchInputToggle)}
          className=" hover:bg-blue-100  dark:hover:bg-gray-700 hover:rounded-lg p-2"
        >
          <FiSearch className="text-2xl  " />
        </li>
        {searchInputToggle ? (
          <input
            type="text"
            className="bg-gray-100  absolute md:relative md:top-auto md:right-auto right-9 h-7 md:h-auto top-14 w-24  border-2 outline-none mr-2 transition-all duration-500 ease-in border-gray-300 dark:bg-gray-500 dark:border-gray-400  p-1 rounded-md"
            value={searchTerm}
            onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
          />
        ) : (
          ""
        )}
        <li className="w-42 my-2 relative">
          <a
            href="https://github.com/khorshidhoseiny"
            alt="khorshid Moradhoseiny"
            className="relative cursor-pointer"
          >
            <span className=" absolute right-0 bottom-0 inline-flex rounded-full h-3 w-3 bg-green-500">
              <span className="animate-ping  right-0 inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            </span>
            <img
              src={ProfileImg}
              className="w-10 rounded-full"
              alt="khorshid moradhoseiny"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
