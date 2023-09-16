import React from 'react'
import { NavLink } from 'react-router-dom'

function Card ({ meal, img, id }) {
    return (
        <NavLink to={`/meat/${id}`} className='block bg-white border border-slate-200 rounded-md shadow-sm hover:text-blue-500 hover:-translate-y-2 hover:shadow-md ease-in-out duration-300' >
            <div className='p-3'>
                <img className='max-w-full rounded-md mb-3' src={img} alt={meal} />
                <p className='font-semibold'>
                    {meal}
                </p>
            </div>
        </NavLink >
    )
}

export default Card