import React from 'react'
import { Button, TextInput as Input } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

function Home () {

    const inputRef = useRef();
    const nav = useNavigate();

    return (
        <div>
            <h1 className='mb-3'>
                Home
            </h1>
            <div className='flex'>
                <Input ref={inputRef} className='me-3' placeholder='Enter Search' />
                <Button onClick={() => nav('/contact/1', { state: { text: inputRef.current.value } })} color="dark">
                    Go to Contact
                </Button>
            </div>
        </div>
    )
}

export default Home