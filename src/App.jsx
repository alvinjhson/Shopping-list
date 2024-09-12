import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// const Name = () => {


//   return (
//     <h2>Jag heter {Props.name}</h2>

//   )


// }

// const Counter = () => {

//   const [count,setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);

//   }

//   const decrement = () => {
//     setCount(count - 1);
    
//   }

//   return (
//     <div>
//     <h1>Räknare</h1>
//     <p>Antal: {count}</p>
//     <button onClick={increment}>Öka</button>
//     <button onClick={decrement}>Minska</button>

  
//     </div>

//   )

// }

// const ChildComponent = ({savings , amountNeeded, requestMoney}) => {

//   const handleRequest = () => {

//     requestMoney(amountNeeded)
//   };

//   return (
//     <div>
//       <h2>BarnKomponenet</h2>
//       <p>Jag behöver {amountNeeded} kr för att köpa en leksak.</p>
//       <p>Föreldern har {savings} kr i sparande.</p>
//       <button onClick={handleRequest}>Begär pengar</button>
//       {savings >= amountNeeded ? (
        
//         <p>Du har tillräckligt med pengar för att köpa en leksak</p>
          
//       ) : (
//         <p>Tyvärr, du har inte tillräckligt med oengar för att köpa leksaken</p>
//       )}


//     </div>
//   );



// };

// const ParentComponent = () => {

//   const [savings,setSavings] =useState(1000);
//   const amountNeeded = 300;

//   const requestMoney = (amount)  => { 

//     if (savings  >= amount ) {

//       setSavings(savings - amount);

//     }



//   }

//   return ( 
//      <div>


//     <h1>Föräldrakomponent</h1>
//     <p>Föreldern har {savings} kr i sparande.</p>
    
//     <ChildComponent savings = {savings} amountNeeded={amountNeeded} requestMoney={requestMoney}/>

//   </div>
//   );
// };

const TaskItem = ({ task, toggleComplete, deleteTask  }) => {

  return (
    <div>
      <input
         type="checkBox"
         checked={task.completed}
         onChange={()  => toggleComplete(task,id)}
      
      
       />
       <span>
        {task.text}


       </span>
       <button onClick={() => deleteTask(task.id)}>Delete</button>





    </div>

  );




}

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask(''); // Clear the input after adding the task
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Shopping list</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="add new item"
      />
      <button onClick={addTask}>Add Item</button>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App
