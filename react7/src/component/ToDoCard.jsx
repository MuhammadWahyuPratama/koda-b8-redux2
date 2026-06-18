import { FiTrash2 } from "react-icons/fi";

function ToDoCard({ todo, handleToggleTodo, handleDeleteTodo }) {
  return (
    <section className="border-b border-gray-200 px-5 py-5 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h2
            className={`text-base sm:text-lg font-semibold ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </h2>
        </div>

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo.id)}
          className="h-6 w-6 cursor-pointer accent-blue-500"
        />

        <button
          type="button"
          onClick={() => handleDeleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <FiTrash2 className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default ToDoCard;
