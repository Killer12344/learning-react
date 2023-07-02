import React, { useState } from "react";
import Input from "./components/Input";

function App() {

  const [bool, setBool] = useState(true);

  return (
    <div className="App bg-slate-300 h-screen">
      <div className="p-6">
        <div className="w-1/5">
          {
            !bool && 'Yes is True'
          }
          <button className="btn-blue" onClick={()=>setBool(pre=> !pre)}> Click Me </button>
          <Input />        
        </div>
      </div>
    </div>
  );
}
export default App;
