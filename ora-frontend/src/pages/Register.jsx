import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Register() {
    const navigate = useNavigate();

    const SignUpWithGoogle = () => 
    {
        signInWithPopup(auth, provider)
            .then((result) => 
            {
                console.log("User signed in: ", result.user);
                // Redirect to the Stream Choice component
                navigate("/Goals");
            })
            .catch((error) =>
            {
                console.error("Error during sign in: ", error);
            });
    };

    return (
        <button type="button" onClick={SignUpWithGoogle} className="register-btn">
            Join for free
        </button>
    );
}

export default Register;
