import { useDispatch, useSelector } from "react-redux";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ToDoCard from "./component/ToDoCard";
import { removeTask, toggleTask } from "./redux/reducers/todos";

function HomePage() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:px-8">
      <section className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <Header />

        {todos.map((todo) => (
          <ToDoCard
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}

        <Footer />
      </section>
    </main>
  );
}

export default HomePage;