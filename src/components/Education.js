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
            {/*
                <div className="education-content-wrap">
                    
                    <section className="first-section">
                        <h2 className="product-title">TEACHING</h2>
                        
                        {educationOne.map((columnOne, index) => (
                            <div key={columnOne.id}>
                                <div className="product-set">
                                    <div onClick={() => toggleOneState(index)} className={oneStates[index] ? `${columnOne.class} product-column` : 'product-column'}>
                                    {oneStates[index] ? <p className='opened'>State is true</p> : <p>State is false</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </section>
                    */}
                    {/*
                    <section>
                        <h2 className="product-title">TWO</h2>
                        
                        {educationTwo.map((columnTwo, index) => (
                            <div key={columnTwo.id}>
                                <div className="product-set">
                                    <div onClick={() => toggleTwoStates(index)} className={twoStates[index] ? `${columnTwo.class} product-column` : 'product-column'}>
                                    {twoStates[index] ? <p className='opened'>State is true</p> : <p>State is false</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </section>
                
                </div>
                */}
            </main>
        </>
    )
}

export default Education