import React, { useState, useEffect } from "react";
import './ComingSoon.css'

function ComingSoon(){

    useEffect(() => {
        document.title = "LLXYD | Reviews";
    }, []);

    const [text, setText] = useState('COMING SOON');
    const animationInterval = 750;

    useEffect(() => {
        const animationLoop = () => {
        setTimeout(() => {
            setText('COMING SOON.');
        }, 0);

        setTimeout(() => {
            setText('COMING SOON..');
        }, animationInterval);

        setTimeout(() => {
            setText('COMING SOON...');
        }, 2 * animationInterval);

        setTimeout(() => {
            setText('COMING SOON');
        }, 3 * animationInterval);
        };

        const intervalId = setInterval(animationLoop, 4 * animationInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="coming-soon-wrap">
            <p id="comingSoon">{text}</p>
        </div>
    )
}

export default ComingSoon