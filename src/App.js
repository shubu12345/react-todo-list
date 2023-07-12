import React, { useState } from 'react';
import ToDoList from './ToDoList'
import './App.css';

let App = () => {
  let time = new Date().toLocaleTimeString();
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const [ctime, settime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    settime(time);
  }

  setInterval(updateTime, 1000);

const itemEvent = (event) => {
  setInputList(event.target.value);
}

const listOfItems = () => {
  setItems((oldItems) => {
    return [...oldItems, inputList];
  });
  setInputList("");
}
const deleteItems = (id) => {
  setItems((oldItems) => {
    return oldItems.filter((arrEle, index) => {
      return index !== id;
    })
  })
}


return (
  <>
  <div className='main-div'>
  <div className='center-div'>
  <h4>{time}</h4>
  <br />
  <h1> ToDO List </h1>
  <br />
  <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />
  <button onClick={listOfItems}> + </button>

  <ol>
    {items.map((itemval, index) => {
      // return <li> {itemval} </li>
      return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems} />
    })}
  </ol>
  </div>
  </div>
  </>
)
}

export default App;
