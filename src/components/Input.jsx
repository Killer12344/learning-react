import { useState, memo } from "react";
import Counter from "./Counter";

const Input = () => {

    const [text,setText] = useState('');

    console.log('i am parent render');

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} value={text} className="form-control" />
            <Counter></Counter>
        </div>
    );
};

export default memo(Input);