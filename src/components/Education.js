import React, { useState, useEffect } from "react";
import './Education.css'


function Education(){

    useEffect(() => {
        document.title = "LLXYD | Education";
    }, []);

    return(
        <>
            <main className="main-element-education">
                <h1 className="education-title">EDUCATION</h1>
                <p className="education-description">
                    Explore my exclusive music education content on HeroHero! 
                    Elevate your music production and mixing skills with in-depth tutorials, 
                    industry insights, and interactive sessions. 
                    Join me on a journey to unlock your musical potential.
                </p>
                <a href="https://herohero.co/lubosllxyduyfbgvae" target="_blank" className="hero-btn">HEROHERO</a>
            </main>
        </>
    )
}

export default Education