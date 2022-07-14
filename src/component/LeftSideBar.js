import { TiUser } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";
import { RiComputerFill, RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillPlusSquare } from "react-icons/ai";
const LeftSideBar = () => {
  return (
    <form className="sticky w-1/6 md:w-2/6 lg:w-1/6 bg-white dark:bg-gray-800 py-5 transition-all flex flex-col justify-between max-h-screen dark:text-white text-slate-800  ">
      <ul>
        <h1 className="text-slate-800 dark:text-white text-xl hidden md:block md:ml-3 lg:ml-8 font-bold">
          Collections
        </h1>
        <ul className="flex flex-col  text-lg md:mt-3 ">
          <li className="flex gap-x-2 cursor-pointer justify-center md:justify-start p-2 bg-gray-100 dark:bg-slate-900 items-center text-lg transition-all hover:border-l-8 hover:border-slate-600">
            <div className="lg:ml-6 md:ml-1 mr-1 flex gap-x-1 ">
              <div className="bg-green-500 rounded-md text-white text-3xl flex justify-start items-start">
                <TiUser className="p-1" />
              </div>
              <p className="font-bold text-base md:text-lg hidden md:block">
                Personal
              </p>
            </div>
          </li>
          <li className="flex gap-x-2 cursor-pointer justify-center md:justify-start p-2  items-center text-lg transition-all hover:border-l-8 hover:border-slate-600">
            <div className="lg:ml-6 md:ml-1 mr-1 flex gap-x-1 ">
              <div className="bg-pink-500 rounded-md text-white  text-3xl flex justify-start items-start">
                <FaBookOpen className="p-2" />
              </div>
              <p className="font-bold text-base md:text-lg hidden md:block">
                School
              </p>
            </div>
          </li>
          <li className="flex gap-x-2 cursor-pointer justify-center md:justify-start p-2  items-center text-lg transition-all hover:border-l-8 hover:border-slate-600">
            <div className="lg:ml-6 md:ml-1 mr-1 flex gap-x-1 ">
              <div className="bg-purple-500 rounded-md text-white   text-3xl flex justify-start items-start">
                <RiComputerFill className="p-1.5" />
              </div>
              <p className="font-bold text-base md:text-lg hidden md:block">
                Work
              </p>
            </div>
          </li>
          <li className="flex gap-x-2 cursor-pointer justify-center md:justify-start p-2  items-center text-lg transition-all hover:border-l-8 hover:border-slate-600">
            <div className="lg:ml-6 md:ml-1 mr-1 flex gap-x-1 ">
              <div className="bg-yellow-500 rounded-md text-white  text-3xl flex justify-start items-start">
                <RiShoppingCart2Fill className="p-1" />
              </div>
              <p className="font-bold text-base md:text-lg hidden md:block ">
                Geroceries
              </p>
            </div>
          </li>
        </ul>
      </ul>
      <div className="flex items-center cursor-pointer  justify-center gap-x-1 font-bold">
        
        <AiFillPlusSquare className="text-xl " />
        <p className="hidden text-sm md:block">Add new folder</p>
      </div>
    </form>
  );
};

export default LeftSideBar;
