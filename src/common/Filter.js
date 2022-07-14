import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBy, filters } from "../component/features/TodoSlice";
import { IoFilterSharp } from "react-icons/io5";

export default function TodoFilter() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center flex-col relative text-xl">
      <button
        onClick={() => setOpen(!open)}
        className=" text-slate-600 dark:hover:bg-gray-700 hover:bg-blue-100 flex justify-center items-center p-1 rounded-full dark:text-gray-200  "
      >
        <IoFilterSharp/>
      </button>
      {open ? (
        <div className="mt-2 top-6 -left-8 absolute border dark:border-gray-900 dark:bg-gray-800 bg-white p-1 text-sm rounded-lg w-28">
          <div className="border-b p-1 cursor-pointer  dark:hover:bg-gray-900 hover:bg-gray-200 dark:border-gray-600 border-gray-200" onClick={() => dispatch(filterBy(filters.ALL))}>All</div>
          <div className="border-b p-1 cursor-pointer  dark:hover:bg-gray-900 hover:bg-gray-200 dark:border-gray-600 border-gray-200" onClick={() => dispatch(filterBy(filters.COMPLETED))}>
            completed
          </div>
          <div className=" p-1 cursor-pointer rounded-md dark:hover:bg-gray-900 dark:border-gray-600 hover:bg-gray-200" onClick={() => dispatch(filterBy(filters.NOT_COMPLETED))}>
             <p>not completed</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
