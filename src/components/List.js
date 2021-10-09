import react, { useState, useEffect } from "react";
import Form from "./Form";

const List = () => {

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

  const clearCompletedHandler = () => {
    const holder = [...list].filter(item => item.isDone==false);
    setList(holder);
  }

  const labelOnClickHandler = (item, index) => {
    const listHolder = [...list];
    listHolder[index].isDone = !item.isDone;
    setList(listHolder);
  }

  return (
    <div className="list-fetch">
     {console.log(list)}
      {
      list.map((item, index) => {
        return(
        <label 
          style={item.isDone ? {textDecoration:"line-through"} : {}}
          onClick={() => labelOnClickHandler(item, index)}
        >
          {item.task}
          <br/>
        </label>
        )
        
      })
    }
    <br/>
    <button onClick={clearCompletedHandler}>Clear Completed</button>
    <Form 
      list={list}
      setList={setList}
    />
    </div>
  )
}

export default List;