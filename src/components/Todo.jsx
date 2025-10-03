import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => prvTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="
        bg-white place-self-center 
        w-11/12 max-w-md 
        flex flex-col p-5 sm:p-7 
        min-h-[500px] sm:min-h-[550px] 
        rounded-lg sm:rounded-xl 
        shadow-md sm:shadow-lg
      "
    >
      {/* -----------title----------------- */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <img className="w-6 sm:w-8" src={todo_icon} alt="title" />
        <h1 className="text-gray-900 font-bold text-2xl sm:text-3xl">
          To-Do List
        </h1>
      </div>

      {/* -----------input----------------- */}
      <div
        className="
          bg-gray-200 flex rounded-full items-center
          text-gray-900 font-bold
          flex-col sm:flex-row gap-3 sm:gap-0
          p-2 sm:p-0
        "
      >
        <input
          ref={inputRef}
          className="
            bg-transparent border-0 outline-none flex-1
            h-12 sm:h-14 pl-4 sm:pl-6 pr-2
            placeholder:text-slate-600
            text-base sm:text-lg
          "
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="
            border-none rounded-full 
            bg-orange-400 w-full sm:w-32 h-12 sm:h-14 
            text-white text-base sm:text-lg font-bold 
            cursor-pointer hover:bg-orange-600
            transition-colors
          
          "
        >
          Add +
        </button>
      </div>

      {/* -----------todo-items----------------- */}
      <div className="mt-4 sm:mt-6">
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
