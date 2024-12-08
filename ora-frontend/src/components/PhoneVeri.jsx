import React from 'react'
import './PhoneVeri.css'

import { useRef,useState } from 'react';

import {app} from "../firebase";
import {getAuth, signInWithPhoneNumber} from "firebase/auth";
import {RecaptchaVerifier} from "firebase/auth";


const auth = getAuth(app)


function PhoneVeri() 
{

    const [PhoneNumber, setPhoneNumber] = useState('')
    const [VerificationID, setVerificationID] = useState(null)
    const [Otp , setOtp] = useState("")
    
    const HandleSentOTP =async()=>
    {
        try
        {
            const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
            const confirmation = signInWithPhoneNumber(auth,PhoneNumber,recaptcha)
            setVerificationID(confirmation)
        }
        catch(err)
        {
            console.error(err)
        }
    }

    const verifyOTP = ()=>
    {
        VerificationID.confirm()
    }

    return (
    <>    
        
        <div className='phoneInp'>

            <div id='recaptcha"'></div>

            <div className='country-flag'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIJbX-6MVfN4u1_xWs8A7eADfLg1lU9k7oA&s" alt="flag" />

                <p id='country-num'>+91</p>

            </div>

            <div className='input-no'>

                <input 
                    type="tel" 
                    value={PhoneNumber}
                    onChange={(e)=>
                    {
                        setPhoneNumber(e.target.value)
                    }}
                    placeholder='Enter your phone number'
                />

            </div>

        </div>

        <p id='otp'>
            We’ll send an OTP for verification
        </p>

        <button type="button" onClick={HandleSentOTP} className="register-btn">Join for free</button>

    </>  
    )
}



export default PhoneVeri