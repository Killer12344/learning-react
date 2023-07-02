import { memo } from "react";

function Counter() {
  
    console.log('I am child render');
  
    return (
        <div>Counter</div>
    )
}

export default memo(Counter)