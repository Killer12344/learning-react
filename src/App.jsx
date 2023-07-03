import React, { useState } from "react";
import Input from "./components/Input";
import ComponentOne from "./components/Effect/ComponentOne";
import ComponentTwo from "./components/Effect/ComponentTwo";

function App() {

  const [bool, setBool] = useState(true);

  return (
    <div className="App bg-slate-300 h-screen">
      <div className="p-6">
        <div className="w-1/5">
          {/* { !bool && 'Yes is True'} */}
          {/* <button className="btn-blue" onClick={()=>setBool(pre=> !pre)}> Click Me </button> */}
          {/* <Input />   */}
            <ComponentOne />
            <ComponentTwo />

        </div>
      </div>
    </div>
  );
}
export default App;
