import { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ToDoCard from "./component/ToDoCard";

function HomePage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
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

        <Footer setTodos={setTodos} />
      </section>
    </main>
  );
}

export default HomePage;
