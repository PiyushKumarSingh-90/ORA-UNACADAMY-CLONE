import React from 'react'
// import PhoneVeri from './PhoneVeri'
import Register from '../pages/Register'
import "./login.css"

function login() 
{
    return (
        <div className='login-page'>

            <div className='header'>
                
                <img 
                className='logo'
                src="/images/logo.png" 
                alt="logo" />

                <div className='login-button'>
                    <button type="button" className="login-btn">Log in </button>
                </div>

            </div>

            <div className='main'>

                <div className='content'>

                    <h1>Crack your goal with India’s top educators
                    </h1>

                    <p id='trust'>
                        Over <span className="highlight">10 crore</span> learners trust us for their preparation
                    </p>

                    <Register/>

                </div>

                <div className='main-img'>

                    <img src="https://img.freepik.com/premium-vector/diverse-group-people-working-together-project-using-laptop-discussing-ideas-looking-happy-motivated_123891-115150.jpg?w=1380" alt="main-img" />

                </div>

            </div>

        </div>
    )
}

export default login