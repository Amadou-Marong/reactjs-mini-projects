import { useState } from "react";
function ToDoList(){
    const [tasks, setTasks] = useState(["Take Shower", "Eat Breakfast", "Go To School"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function handleAddTask(){
        if(newTask.trim() != ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index)
        setTasks(updatedTasks);
    }
    function handleMoveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function handleMoveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="todo-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add New Task..."/>
                <button className="add-button" onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button className="up-button" onClick={() => handleMoveUp(index)}>Up</button>
                        <button className="down-button" onClick={() => handleMoveDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList