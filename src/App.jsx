import React, { useContext, useState } from "react";
import Input from "./components/Input";
import ComponentOne from "./components/Effect/ComponentOne";
import ComponentTwo from "./components/Effect/ComponentTwo";
import Testing from "./components/Testing";
import { ThemeContext, FontContext } from "./Context/Test";

function App() {

  const [bool, setBool] = useState(true);
  const theme = useContext(ThemeContext);
  const font  = useContext(FontContext);

  return (
    <div className="App bg-slate-300 h-screen">
      <div className="p-6">
        <div className="w-1/5">
          {/* { !bool && 'Yes is True'} */}
          {/* <button className="btn-blue" onClick={()=>setBool(pre=> !pre)}> Click Me </button> */}
          {/* <Input />   */}
          {/* <ComponentOne /> */}
          {/* <ComponentTwo /> */}
          <Testing title={font}>
            <button className={theme}>
              Click
            </button>
          </Testing>
        </div>
      </div>
    </div>
  );
}
export default App;
