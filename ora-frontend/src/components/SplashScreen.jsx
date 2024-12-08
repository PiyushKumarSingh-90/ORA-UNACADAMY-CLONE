import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => 
{
    const navigate = useNavigate();

    useEffect(() => 
    {
        // Redirect to the login page after 5 seconds (or the length of your video)
        const timer = setTimeout(() => 
        {
            navigate("/login");
        }, 8000); // Adjust this duration to match your video length

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

    return (
        <div style={
                { width: "100%", 
                height: "100vh", 
                overflow: "hidden", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                backgroundColor: "#000" 
                }
            }>

            <img src="/images/frontIMG.png" alt="FrontIMG" />

        </div>
    );
};

export default SplashScreen;
