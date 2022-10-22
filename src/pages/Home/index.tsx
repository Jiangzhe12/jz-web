import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

    const location = useLocation()

    return (
        <div>
            <h1>username:{location.state.username}</h1>
            <h1>password:{location.state.password}</h1>
        </div>
    )
}

export default Home