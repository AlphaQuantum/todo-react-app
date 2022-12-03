import React, { useState } from 'react';
import Form from "./components/Form";
import Task from "./components/Task";
function App() {
  const [tasks, setTask] = useState([{ name: "eat", id: 1 }, { name: "sleep", id: 2 }]);
  let [counter, setCounter] = useState(3);
  
  const handleAdd = (newTask) => {
    //Checks if task is already existing
    const exist = tasks.find(x => x.name === newTask.name);
    if (exist) {
      alert("Error, Task Already Present");
    }
    else {
      //sets the id for the new task and increases the counter
      newTask.id = counter;
      //console.log(newTask.id);
      setCounter(counter+=1);
      setTask([...tasks, newTask]);
    }
  }

  const handleRemove = (TaskToRemove) => {
    //Keeps only the objects that are with different ID
    const temp = tasks.filter(task => TaskToRemove.id !== task.id);
    setTask(temp);
  }

  return (
    <div className="bg-slate-800 text-white border border-gray-100 w-1/4 mx-auto p-4 my-10 rounded-xl">
      <h1 className="text-center text-2xl font-bold">Todo React App</h1>
      <Form handleAdd={handleAdd} />
      {tasks.map((task) => (<Task key={task.id} handleRemove={handleRemove} task={task}/>))}
    </div>
  );
}

export default App;
