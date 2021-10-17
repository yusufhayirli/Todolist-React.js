import react, { useState } from "react";

const Form = ({ 
  newTask, 
  setNewTask,
  list,
  setList
}) => {

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  //both works
  const submitHandler = () => {
    if(newTask==="") {
      alert("Enter a task!");
    }
    const listHolder = [...list];
    listHolder.push({task: newTask, isDone: false});
    setList(listHolder);
    setNewTask("");
    
    // setList([...list, {
    //   task: newTask, 
    //   isDone:false
    // }]);
  }

  return (
    <div>
      <form>
      <input 
        type="text" 
        name="NewTask" 
        value={newTask} 
        placeholder="Enter a new task" 
        onChange={(e) => handleChange(e)}
      />
      <button class="button" type="button" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Form;