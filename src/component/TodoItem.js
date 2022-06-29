import { FiTrash2 } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { TiTickOutline, TiTick } from "react-icons/ti";
import { IoIosMore } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./features/TodoSlice";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

const TodoItem = ({ todo, id, onEdit }) => {
 
  const dispatch = useDispatch();
  const [moreOptionToggle, setMoreOptionToggle] = useState(false);
  const [disclosureToggle, setDisclosureToggle] = useState(false);

  const buttonConfig = {
    transform: "rotate-180 ",
  };

  return (
    <div className="flex my-2 !transition-all !duration-700 justify-between dark:text-gray-200 border-gray-200 bg-white dark:bg-gray-800 w-full p-2 flex-col  rounded-md ">
      <ul className=" relative flex justify-between p-2 w-full rounded-lg text-slate-400 ">
        <li className="flex items-center justify-center gap-x-1 ml-1">
          <button onClick={() => dispatch(toggleTodo({ id }))}>
            {todo.completed ? (
              <TiTick className="text-pink-500 text-3xl" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank className="text-pink-500 text-2xl md:text-3xl" />
            )}
          </button>
          <p
            className={
              todo.completed
                ? "line-through flex items-start italic text-xl font-semibold "
                : "text-slate-600 dark:text-gray-200 flex items-center  p-0 text-lg md:text-xl font-semibold"
            }
          >
            {todo.title}
          </p>
        </li>

        <li className="flex justify-end items-center gap-x-3">
          <div></div>
          <HiChevronDown
            onClick={() => setDisclosureToggle(!disclosureToggle)}
            className={`hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-700 w-6 h-6 p-1 text-xl md:text-2xl rounded-full flex items-center justify-center ${
              disclosureToggle && buttonConfig.transform
            }`}
          />
          <IoIosMore
            onClick={() => setMoreOptionToggle(!moreOptionToggle)}
            className="hover:bg-gray-100 dark:hover:bg-gray-600 w-6 h-6 p-1 text-xl rounded-full md:text-2xl flex items-center transition-all duration-700 justify-center "
          />
        </li>
        {moreOptionToggle ? (
          <div className="absolute border border-gray-100 z-10 p-2 -right-10 top-7 dark:bg-gray-800 dark:border-gray-600 bg-white flex flex-col w-24 md:w-32 rounded-md ">
            <ul>
              <li
                onClick={onEdit}
                className="hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:text-gray-200 text-slate-600 w-full p-1"
              >
                Edit
              </li>
              <li
                onClick={() => dispatch(deleteTodo({ id }))}
                className="hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer text-red-600 w-full p-1"
              >
                Remove
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </ul>
      {disclosureToggle ? (
        <div className=" !transition-all !duration-700 flex  dark:bg-gray-800 dark:border-gray-600 flex-col border-t border-0.5 p-2 px-2 w-full rounded-t rounded-lg text-slate-400 bg-white justify-start  ml-1">
          <p className="text-sm">description :</p>
          <p className=" text-slate-500 dark:text-gray-200 font-semibold text-lg">{todo.desc}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoItem;
