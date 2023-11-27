import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const handleLogin=()=>{
        navigate("/")
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" />
            <button onClick={handleLogin}>Sign In</button>
        </>
    )
}

export default Login