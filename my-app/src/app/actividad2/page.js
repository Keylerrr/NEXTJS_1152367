"use client";

import { Fascinate_Inline } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { text: "Tarea 1", completed: false },
    { text: "Tarea 2", completed: false },
  ]);
  const [currentTask, setCurrentTask] = useState("");

  const [alreadySorted, setAlreadySorted] = useState(false);

  const addButtonHandler = () => {
    if(currentTask === ""){
      alert("No has ingresado ningún valor para agregar.");
      return;
    }
    for(const task of tasks){
      if(currentTask === task.text){
        alert("Esa tarea ya existe, intenta con otro nombre.");
        return;
      }
    }
    const newTask = { text: currentTask, completed: false };
    setTasks([...tasks, newTask]);
    setCurrentTask("");
  };

  const crossOut = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearButtonHandler = () => {
    setTasks([]);
  }

  const sortButtonHandler = () => {

    const sortedTasks = [...tasks];

    if(alreadySorted){
      sortedTasks.sort((a, z) => z.text.localeCompare(a.text));
    }
    else{
      sortedTasks.sort((a, z) => a.text.localeCompare(z.text));
    }

    setAlreadySorted(!alreadySorted);
    setTasks(sortedTasks);
  }

  // Reto 1: Hacer que no se pueda agregar una tarea vacía 
  // Reto 2: Hacer que no se pueda agregar una tarea repetida
  // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through")
  // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea
  // Reto 5: Poner un botón que organice las tareas alfabéticamente
  // Reto 6: Poner un botón que elimine todas las tareas
  // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar

  return (
    <section className="bg-orange-300 p-4 max-w-2xl mx-auto my-10">
      <div className="my-2 flex gap-2">
        <input
          className="bg-gray-100 text-black border border-red-400 rounded-lg p-2"
          type="text"
          value={currentTask}
          onChange={(e) => {
            setCurrentTask(e.target.value);
          }}
        />
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={addButtonHandler}
        >
          Agregar
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={clearButtonHandler}>
          Vaciar
        </button>
        <button className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={sortButtonHandler}>
          Ordenar
        </button>
      </div>
      <div className="flex flex-col gap-2 text-black">
        {tasks.map((task, index) => (
            <div key={index} className={`bg-yellow-100 rounded-lg px-2 py-1 hover:cursor-pointer ${task.completed ? "line-through decoration-red-600 text-red-600" : ""}`}
              onClick={() => {task.completed ? removeTask(index) : crossOut(index);}}>
              {task.text}
            </div>
        ))}
      </div>
    </section>
  );
}