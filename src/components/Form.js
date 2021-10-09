import react, { useState } from "react";

const Form = ( { list, setList } ) => {

  const [newTask, setNewTask] = useState('');

  // const submitHandler = () => {
  //   setList(...list, newTask);
  // }

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const submitHandler = () => {
    setList([...list, {
      task: newTask, 
      isDone:false
    }]);
  }

  return (
    <div>
      <form>
      <input type="text" name="NewTask" value={newTask} placeholder="Enter a new task" onChange={handleChange}/>
      <br/>
      <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Form;