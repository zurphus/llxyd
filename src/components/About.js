import React, { useState, useEffect } from "react";
import './About.css'
import teamMembers from "../data/about-data";

function About() {

    useEffect(() => {
        document.title = "LLXYD | About";
    }, []);

    const [bodyWidth, setBodyWidth] = useState(window.innerWidth) 

    const sizeControl = () => {
        setBodyWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", sizeControl)
        return () => window.removeEventListener("resize", sizeControl)
    }, [])

    return (
        <main className="main-element">
            {teamMembers.map((member) => (
                <div key={member.id}>
                    <article className='about-card'>
                        {member.id % 2 === 0 ? (
                            <>
                                {bodyWidth > 1000 && (
                                    <img src={member.imageUrl} className="about-members-image" alt="image of a member" />
                                )}
                                <div className="about-text-wrapper">
                                    <h2 className="about-name">{member.name}</h2>
                                    <p className="about-text">{member.about}</p>
                                </div>
                                {bodyWidth <= 1000 && (
                                    <img src={member.imageUrl} className="about-members-image" alt="image of a member" />
                                )}
                            </>
                        ) : (
                            <>
                                
                                <div className="about-text-wrapper">
                                    <h2 className="about-name">{member.name}</h2>
                                    <p className="about-text">{member.about}</p>
                                </div>
                                <img src={member.imageUrl} className="about-members-image" alt="image of a member" />
                            </>
                        )}
                    </article>
                </div>
            ))}
        </main>
    );
}

export default About