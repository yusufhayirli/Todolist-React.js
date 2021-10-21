import react, { useState } from "react";
import Header from "./Header";
import List from "./List";
import Form from "./Form";

const Todolist = () => {

  const [newTask, setNewTask] = useState('');

  const [list, setList] = useState(
    [
        {
          task: 'read a book',
          isDone: false
        },
        {
          task: 'toss a coin',
          isDone: true
        },
    ]
  );

  return(
    <div className="todolist-container">
    <Header/>

      <List
        list={list}
        setList={setList}
      />

      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        list={list}
        setList={setList}
      />
    </div>
  )
}

export default Todolist;