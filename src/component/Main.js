import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { IoChevronBackOutline } from "react-icons/io5";
import TodoFilter from "../common/Filter";
import {  useState } from "react";
import { IoAdd } from "react-icons/io5";


const Main = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" px-8 md:px-16 flex flex-col">
      <div className="flex items-center mb-7  justify-between mt-4 ">
        {/* Top section */}
        <div className="flex items-center my-5 gap-x-3">
          <div className="rounded-full dark:hover:bg-gray-700 hover:bg-blue-100 p-1 flex justify-center items-center cursor-pointer">
            <IoChevronBackOutline className="text-xl  flex items-center justify-center font-bold" />
          </div>

          <h1 className="md:text-3xl text-xl flex items-center font-bold ">
            Personal
          </h1>
        </div>
        {/* filter */}
        <div className="flex gap-x-2 justify-center items-center">
          <p className="text-sm hidden md:block font-semibold dark:text-gray-200 text-slate-600">
            Filter by
          </p>
          <TodoFilter />
        </div>
      </div>
      {/* AddTodo Form */}
      <div
        className="bg-white text-slate-600 dark:bg-gray-800 dark:text-gray-200
     font-bold px-2 py-1 rounded-lg flex items-center gap-x-2 h-11 cursor-pointer w-full "
        onClick={() => setShowModal(true)}
      >
        <div className="bg-pink-500 text-white p-1 flex rounded-md ">
          <IoAdd />
        </div>
        <p>Add new task</p>
      </div>
      <TodoForm showModal={showModal} setShowModal={setShowModal} />
      <TodoList  setShowModal={setShowModal} />
    </div>
  );
};

export default Main;
