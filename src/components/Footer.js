import React from "react";
import footerData from "../data/footer-data";
import './Footer.css'
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';

function Footer(){
    return(
        <>
            <footer>
                <div className="footer-content-wrapper">
                    <p className="email-text">{footerData[0].email}</p>
                    <div className="icon-wrapper">
                        <div className="socials-wrap" id="instagram-wrap">
                            <a href="https://www.instagram.com/llxyd_rap/" target="_blank">
                                <BsInstagram id="instagram-logo" className="socials"></BsInstagram>
                            </a>
                        </div>
                        <div className="socials-wrap" id="youtube-wrap">
                            <a href="https://youtube.com/@darkmusic1115?si=p0bZNjxYdVNln-71" target="_blank">
                                <BsYoutube id="youtube-logo" className="socials"></BsYoutube>
                            </a>
                        </div>
                        <div className="socials-wrap" id="spotify-wrap">
                            <a href="https://open.spotify.com/artist/0dsAI9JTW0D4aM3hVtLMDk?si=l4NSbV11SXGwSyYVjubEmw&utm_source=copy-link&nd=1" target="_blank">
                                <BsSpotify className="socials" id="spotify-logo"></BsSpotify>
                            </a>
                        </div>
                    </div>
                    <p className="copyright-text">{footerData[0].copyright}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;