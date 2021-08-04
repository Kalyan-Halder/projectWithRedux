import React from 'react'
import {NavLink} from 'react-router-dom'

function Error() {
    return (
        <div>
             <div className="creates">
             <h1>Page Not Found</h1>
             <NavLink className="btn links" to="/">Home</NavLink>
        </div>
        </div>
    )
}

export default Error
