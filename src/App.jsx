import React, { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {

  const data = [
    {
      name : 'Homework',
      done : false,
      id : 1,
    },
    {
      name : 'Coding',
      done : false,
      id : 2,
    },
  ];

  const [items, setItems] = useState(data);


  const handleClick = (data) => {
    if (data != '') {
      setItems([{ name : data, done : false, id : items.length+1 }, ...items]);
    } else {
      alert("Please enter something!");
    }
  }

  const handleDelete = (id) => {
    setItems(items.filter( item =>{
      if (item.id != id) {
        return item;
      }
    }));
  }

  const handleEdit = (id) => {
    const oldData = items.find(i=>i.id == id);
    const value = prompt("Enter new values", oldData.name);
    if (value) {
      setItems(items.map(item => id == item.id ? { name: value, done: false, id: id } : item));      
    }
  }

  const handleCheck = (id) => {
    setItems(items.map(item => {
      if (id == item.id) {
        if (item.done) {
          return { name : item.name, done: false, id: item.id }          
        }else{
          return { name : item.name, done: true, id: item.id }
        }
      } else {
        return item;
      }
    }));
  }


  return (
    <div className="App bg-slate-300 h-screen">
      <div className="container py-10 mx-auto">
        <div className="lg:w-1/4 w-11/12 mx-auto">
          <h1 className="text-center text-3xl mb-3 font-bold uppercase"> Todo List{ items.length >= 2 ? 's' : '' } </h1>    
          
          <Form clicking={handleClick} />

          <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-400 border-b-0 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            { items.map(item => (
              <List edit={handleEdit} deleteData={handleDelete} checkout={handleCheck} id={item.id} item={item} key={item.id} />
            )) }
          </ul>
        </div>
        
      </div>
    </div>
  );
}
export default App;
