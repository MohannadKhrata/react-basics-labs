import React, { useState } from 'react';

import './App.css';
import Task from './components/Task';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes",  description: "Empty dishwasher",            deadline: "Today",    priority: "high",   done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away",   deadline: "Tomorrow", priority: "medium", done: false },
      { id: 3, title: "Tidy up",                                          deadline: "Today",    priority: "low",    done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}   // <-- added
          markDone={() => doneHandler(index)}
        />
      ))}
    </div>
  );
}

export default App;
