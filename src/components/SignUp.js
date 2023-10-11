import React, { useState, useEffect } from "react";
import './SignUp.css'
import { Link } from "react-router-dom";

function SignUp(){

    const [text, setText] = useState('COMING SOON');
    const animationInterval = 750; // Interval between text changes in milliseconds

    useEffect(() => {
        const animationLoop = () => {
            setTimeout(() => {
                setText('COMING SOON.');
            }, animationInterval);

            setTimeout(() => {
                setText('COMING SOON..');
            }, 2 * animationInterval);

            setTimeout(() => {
                setText('COMING SOON...');
            }, 3 * animationInterval);

            setTimeout(() => {
                setText('COMING SOON');
            }, 4 * animationInterval);
        };

        const intervalId = setInterval(animationLoop, 4 * animationInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <div className="coming-soon-wrap">
            <p className="coming-soon-form">SIGN UP</p>
            <p className="coming-soon-form">{text}</p>
            <Link to="/">
                <button className="go-back-btn">GO BACK</button>
            </Link>
        </div>
    )
}

export default SignUp