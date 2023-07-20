import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nest () {
    return (
        <div>
            <Link to='/nest' >One </Link>
            <Link to='/nest/two' >Two</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default Nest