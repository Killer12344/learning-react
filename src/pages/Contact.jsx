import React from 'react'
import { Button } from 'flowbite-react';
import { useNavigate, useLocation, useParams } from "react-router-dom";


function Contact() {
  
    const nav = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    return (
        <div>
            Contact
            <h1 className='text-blue-800 text-2xl font-bold uppercase'>
                {location.state?.text} { id }
            </h1>
            <Button onClick={()=>nav(-1)} color="dark">
                Back
            </Button>
        </div>
    )
}

export default Contact