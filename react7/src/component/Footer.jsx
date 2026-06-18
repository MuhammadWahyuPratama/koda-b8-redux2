import { IoAdd } from "react-icons/io5";
import { useRef } from "react";

function Footer({setTodos}) {
  const inputRef = useRef(null);
  const handleAddToDo = (e) => {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) return;

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    inputRef.current.value = "";

    inputRef.current.focus();
  };
  return (
    <footer className="border-t flex justify-center items-center border-gray-200 px-5 py-6 sm:px-8">
      <form onSubmit={handleAddToDo} className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task..."
          className=" rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 cursor-pointer"
        >
          <IoAdd className="h-5 w-5" />
          Add Task
        </button>
      </form>
    </footer>
  );
}

export default Footer;
