import React, { useState, useEffect } from "react";
import './Education.css'

import educationOne from "../data/education-data/education-one-data";
import educationTwo from "../data/education-data/education-two-data";


function Education(){

    useEffect(() => {
        document.title = "LLXYD | Education";
    }, []);

    const [oneStates, setOneStates] = useState(Array(educationOne.length).fill(false))
    const [twoStates, setTwoStates] = useState(Array(educationTwo.length).fill(false))

    const toggleOneState = (index) => {
        const updatedOneStates = [...oneStates]
        updatedOneStates[index] = !updatedOneStates[index]
        setOneStates(updatedOneStates)
    }
    const toggleTwoStates = (index) => {
        const updatedTwoStates = [...twoStates]
        updatedTwoStates[index] = !updatedTwoStates[index]
        setTwoStates(updatedTwoStates)
    }

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