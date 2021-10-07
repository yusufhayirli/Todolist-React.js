import react, { useState, useEffect } from "react";

const List = ({
  newTask
}) => {

  const [list, setList] = useState([
    "a","b","c"
  ]);

  const clearCompletedHandler = () => {
    console.log("Clear Completed");
  }

  const newTaskHandler = () => {
    if(newTask!=''){
      setList(...list, newTask);
    }
  }

  useEffect(() => {
    newTaskHandler();
  }, []);

  return (
    <div className="list-fetch">
      List
    {
      Object.values(list).map(element => {
        <label>
          {
          element
          }
        </label>
      })
    }
    <br/>
    <button onClick={clearCompletedHandler}>Clear Completed</button>
    </div>
  )
}

export default List;