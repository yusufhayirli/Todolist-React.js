import react, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

function App() {

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

  return (
    <div className="App">

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
  );
}

export default App;
