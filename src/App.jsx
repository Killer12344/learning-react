import React, { useRef, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const inputRef = useRef();

  const data = [
    {
      name : 'Homework'
    },
    {
      name : 'Coding'
    },
  ];

  const [items, setItems] = useState(data);


  const handleClick = (data) => {
    setItems([{ name : data }, ...items]);
  }


  return (
    <div className="App bg-slate-300 h-screen">
      <div className="container py-10 mx-auto">
        <div className="lg:w-1/4 w-11/12 mx-auto">
          <h1 className="text-center text-3xl mb-3 font-bold uppercase"> Todo List{ items.length >= 2 ? 's' : '' } </h1>    
          
          <Form clicking={handleClick} />

          <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-400 border-b-0 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            { items.map((item, index)=>(
              <List item={item} key={index} />
            )) }
          </ul>
        </div>
        
      </div>
    </div>
  );
}
export default App;
