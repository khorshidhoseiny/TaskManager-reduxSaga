import { useState } from "react";
import { addTodo, updateTodo,setEdit } from "./features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";


const TodoForm = ({showModal, setShowModal }) => {
  
  const { edit } = useSelector((state) => state.todos);
  const [title, setTitle] = useState(edit.id ? edit.title : '');
  const [desc, setDesc] = useState(edit.id ? edit.desc : '');
  
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") {
      alert("fill input please");
    } else {
      dispatch(
        edit.id
          ? updateTodo({
              Text: title,
              description: desc,
              id: edit.id,
            })
          : addTodo({ title: title, desc: desc })
          );
          setShowModal(false);
          dispatch(
            setEdit({ id: null, title:"", desc: "" })
          );
      setTitle("");
      setDesc("");
    }
  };
  return (
    <>
      
      {showModal ? (
       <>
       <div className="flex justify-center bg-[#29292996] items-center fixed inset-0 z-50 outline-none focus:outline-none">
         <div className="flex justify-start flex-col p-3 rounded-lg bg-white  dark:bg-gray-900 items-start w-4/6  ">
           <h1 className=" font-semibold text-xl w-full text-gray-500 dark:text-gray-200 border-b dark:border-gray-600 border-gray-200 p-1">
            {edit.id ? "Update Todo" :"Add a Todo"}
           </h1>
           <div className="flex justify-start w-full items-start flex-col mt-4">
             <label className="text-lg font-semibold dark:text-gray-200 text-slate-600">
               Enter yor title
             </label>
             <input
               type="text"
               placeholder="Title"
               name="title"
               value={title}
               onChange={titleHandler}
               className="bg-white dark:bg-gray-800 border dark:border-gray-600 border-gray-300 outline-none focus:border-blue-400 focus:border-2 p-1 rounded-md w-full "
             />
           </div>
           <div className="flex justify-start items-start w-full  flex-col mt-4">
             <label className="text-lg font-semibold dark:text-gray-200 text-slate-600">
               description
             </label>
             <input
               type="text"
               onChange={descHandler
               }
               name="desc"
               value={desc}
               placeholder="description"
               className="bg-white border dark:border-gray-600 dark:bg-gray-800 focus:border-blue-400 focus:border-2 outline-none border-gray-300  p-1 rounded-md w-full "
             />
           </div>
           <div className="flex items-center w-full mt-4 px-5 justify-between md:justify-end gap-x-4">
             <button
               onClick={() => setShowModal(false)}
               className=" border border-gray-300 w-2/4 md:w-1/4 px-2 py-1 dark:border-gray-600 text-slate-600 dark:text-gray-200 font-semibold text-sm rounded-md md:text-xl"
             >
               cancel
             </button>
             <button
               type="submit"
               onClick={(e)=>submitHandler(e)}
               className="border-pink-500 border-2 bg-transparent text-pink-500 w-2/4 md:w-1/4 px-2 py-1 hover:text-white hover:bg-pink-500 font-semibold rounded-md text-sm md:text-xl"
             >
               {edit.id ? "Update" :"Add"}
             </button>
           </div>
         </div>
       </div>
     </>
      ) : null}
    </>
  );
};

export default TodoForm;
