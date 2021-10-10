import react, { useState } from "react";
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
    const holder = [...list].filter(item => item.isDone===false);
    setList(holder);
  }

  const labelOnClickHandler = (item, index) => {
    const listHolder = [...list];
    listHolder[index].isDone = !item.isDone;
    setList(listHolder);
  }

  return (
    <div className="container"
    style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <div className="list-fetch">
        {
        list.map((item, index) => {
          return(
          <label 
            style={item.isDone ? {textDecoration:"line-through"} : {}}
            onClick={() => labelOnClickHandler(item, index)}
          >
            {index+1}
            {" - "}
            {item.task}
            <br/>
          </label>
          )
        })
      }
      <button class="button" onClick={clearCompletedHandler}>Clear Completed</button>
      </div>
      <div>
      <Form 
        list={list}
        setList={setList}
      />
      </div>
    </div>
  )
}

export default List;