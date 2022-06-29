import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import ProfileImg from "./../image/profile.webp";
import Toggle from "../common/ThemeToggle";


const NavBar = ({open,setOpen}) => {
  
  return (
    <div className="w-full  text-slate-700 bg-white border-b dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300 h-12/5 mr-3 flex justify-between items-center px-5">
      <ul className="flex items-center justify-center relative gap-x-2 ">
        
        <li onClick={()=>setOpen(!open)} className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 ">
          <GiHamburgerMenu className="text-2xl" />
        </li>
        <li className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 flex items-center gap-x-1">
        <MdSpaceDashboard className="text-2xl"/>
        <p className="font-semibold text-lg hidden md:block">Dashboard</p>
        </li>
        <li className="hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2 flex items-center gap-x-1">
        <BsCollectionFill className="text-2xl"/>
        <p className="font-semibold text-lg hidden md:block">Collections</p>
        </li>
      </ul>
      <ul className="flex gap-x-2 items-center justify-center ">
        <li className=" hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg ">
          {<Toggle/>}
        </li>
        <li className=" hover:bg-blue-100 dark:hover:bg-gray-700 hover:rounded-lg p-2">
          <FiSearch className="text-2xl  " />
        </li>
        <li className="w-42 my-2 relative">
          <a
            href="https://github.com/khorshidhoseiny"
            alt="khorshid Moradhoseiny"
          >
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
