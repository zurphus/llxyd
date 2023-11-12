import React, {useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import llxydImage from '../images/loyd-image.jpg'
import audioSong from '../tracks/audio.mp3'
import allImages from '../data/image-data';
import { FaPlay } from 'react-icons/fa';
import { HiMiniPause } from 'react-icons/hi2';

function Home(){

    useEffect(() => {
        document.title = "LLXYD | Music Production & Mastering";
    }, []);
    
    const [isPlaying, setIsPlaying] = useState(false)
    const [animation, setAnimation] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
        }, 250);
    })
    
    const audioElement = useRef()

    const onAudioEnded = () => {
        setIsPlaying(false)
    };
    const playBtnClickHandler = () => {
        audioElement.current.volume = 0.3
        if (!isPlaying) {
            setIsPlaying(true);
            audioElement.current.play()
        } else {
            setIsPlaying(false);
            audioElement.current.pause()
        }
    };

    useEffect(() => {
        audioElement.current.addEventListener('ended', onAudioEnded);
    }, []);
    
    return(
        <>
            <main>
                <div className="introduction-wrapper">
                    <section className="introduction">
                        <div>
                            <h1 className={animation ? 'showTitle' : ''} id="title">The best mix mastering</h1>
                            <p>
                                Unlock the full potential of your music with our top-tier mix mastering service.
                            </p>
                            <Link to="/pricing" id="start-button">BUY</Link>
                        </div>
                        <div>
                            <div className="llyxd-image-wrapper">
                                <img className="llyxd-image" src={llxydImage} alt="image of llxyd" />
                                {isPlaying ? <HiMiniPause onClick={playBtnClickHandler} className="pause-icon"/> : <FaPlay onClick={playBtnClickHandler} className="play-icon"/>}
                                <audio src={audioSong} ref={audioElement}></audio>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="content-categories">
                    {allImages.map((image) => (
                        <div key={image.id}>
                            <Link to={image.link}>
                                <div className="image-card">
                                    <h2 className="image-title">{image.title}</h2>
                                    <img className="image-content" src={image.imageUrl} alt={image.alt} />
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home