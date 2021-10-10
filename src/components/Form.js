import react, { useState } from "react";

const Form = ({ 
  list, 
  setList 
}) => {

  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  //both works
  const submitHandler = () => {
    if(newTask!="") {
      const listHolder = [...list];
      listHolder.push({task: newTask, isDone: false});
      return setList(listHolder);
    }
    alert("enter a task");
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
      <button class="button" type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Form;