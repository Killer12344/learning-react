import React, { useRef } from 'react';

function Form({ clicking }) {

    const inputRef = useRef();

    const handleClick = (e) =>{
        e.preventDefault();
        clicking(inputRef.current.value);

        inputRef.current.value = '';
    }

    return (
        <form>
            <div className="inline-flex items-center w-full gap-2 mb-6">
                <input ref={inputRef} type="text" placeholder="Enter Todo..." className="form-control" />
                <button onClick={handleClick} type="button" className="btn-pill-primary m-0">Add</button>
            </div>
        </form>
    );
}

export default Form;