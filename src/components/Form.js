import react, { useState } from "react";
import List from "./List";

const Form = () => {

  const [newTask, setNewTask] = useState('');

  const submitHandler = (valueOf) => {
    setNewTask(valueOf);
  }

  return (
    <div>
      <List
      newTask={newTask}
      />
      <input type="text" name="NewTaskInput"/>
      <br/>
      <button onClick={submitHandler()}>Submit</button>
    </div>
  )
}

export default Form;