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

  return (
    <div className="list-fetch">
     {console.log(list)}
    <div>
      {
      list.map(item => {
        if (item.isDone==true){
          return(
            <label style={{textDecoration:"line-through"}}>
              {item.task}
            </label>
          )
        }
        else{
          return(
            <label>
              {item.task}
            </label>
            )
        }
      })
    }
    </div>
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