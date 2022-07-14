import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { filters,  setEdit, } from "./features/TodoSlice";


const TodoList = ({ setShowModal }) => {
  const { todos } = useSelector((state) => state.todos);
  const SearchTodo = useSelector((state) => state.todos.searchTerm);
  const { edit } = useSelector((state) => state.todos);
  const { filterBy } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const filteredTodo = () => {
    if (filterBy === filters.COMPLETED) {
      return todos.filter((todo) => todo.completed) ;
    }
    if (filterBy === filters.NOT_COMPLETED) {
      return todos.filter((todo) => !todo.completed);
    }
    
    // if none of above return all todos
    return todos;
  };
 

  const UncompleteTodo = todos.filter((t) => !t.completed).length;

  const renderTodos = () => {
    if (todos === "") return <p>set your today todos</p>;

    return filteredTodo().filter(todo=> SearchTodo ? todo.title.toLowerCase().includes(SearchTodo.toLowerCase()): true)
    
    .map((todo) => {
      return (
        <TodoItem
          id={todo.id}
          key={todo.id}
          todo={todo}
          onEdit={() => {
            dispatch(
              setEdit({ id: todo.id, title: todo.title, desc: todo.desc })
            );
            setShowModal(true);
          }}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm />
      ) : (
        <div className="flex flex-col">
          {todos.length ? (
            <h1 className="text-lg md:text-xl mt-7 mb-2 text-slate-400 font-semibold ">
              Tasks : {UncompleteTodo}
            </h1>
          ) : (
            ""
          )}

          {renderTodos()}
        </div>
      )}
    </div>
  );
};

export default TodoList;
