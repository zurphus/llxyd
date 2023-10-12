import React, { useState, useEffect } from "react";
import './Collab.css'

function Collab(){

    useEffect(() => {
        document.title = "LLXYD | Collab";
    }, []);

    const [text, setText] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const adjustTextareaHeight = (element) => {
        element.style.height = 30 + 'px';
        element.style.height = `${element.scrollHeight}px`; 
    };

    return(
        <main className="main-element-collab">
            <div className="collab-text-btns-wrap">
                <h1 className="collab-title">COLLAB</h1>
                <p>Select reason:</p>
                <a href="#contact-form">
                    <button className="collab-btns">FEATS</button>
                </a>
                <a href="#contact-form">
                    <button className="collab-btns">MIX / MASTER</button>
                </a>
                <a href="#contact-form">
                    <button className="collab-btns">JOIN US</button>
                </a>
                <a href="#contact-form">
                    <button className="collab-btns">OTHER</button>
                </a>
            </div>
            <form id="contact-form" action="https://formsubmit.co/llxyd.business@gmail.com" method="POST">
                <input type="hidden" name="_next" value=""></input> 
                <input type="hidden" name="_subject" value=""></input> 
                <div className="input-group">
                    <input id="name-input" className="contact-inputs" type="text" name="name" placeholder="NAME..." required></input> 
                    <input id="email-input" className="contact-inputs" type="email" name="email" placeholder="EMAIL..." required></input> 
                </div>
                <textarea
                    value={text}
                    onChange={handleChange}
                    onInput={(e) => adjustTextareaHeight(e.target)}
                    id="emailMessage" 
                    name="message" 
                    placeholder="MESSAGE..." 
                    required rows="4" cols="50">
                </textarea>
                <button id="email-submit-btn" type="submit">SEND</button>
            </form>

        </main>
    )
}

export default Collab