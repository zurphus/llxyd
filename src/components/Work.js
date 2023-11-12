import React, { useState, useEffect, useRef } from "react";
import { beforeTracks, afterTracks } from "../data/tracks-data";
import './Work.css'
import { FaPlay } from 'react-icons/fa';
import { HiMiniPause } from 'react-icons/hi2';

function Work() {

    useEffect(() => {
        document.title = "LLXYD | Work";
    }, []);
    
    const [isPlaying, setIsPlaying] = useState({})
    
    const playBtnClickHandler = (trackId) => {
        const audioRef = trackIdToAudioRefMap[trackId]
        const currentlyPlayingTrackId = Object.keys(isPlaying).find(
            (key) => isPlaying[key]
        )

        setIsPlaying((prevIsPlaying) => ({
            ...prevIsPlaying,
            [trackId]: !prevIsPlaying[trackId],
        }))

        if (currentlyPlayingTrackId && currentlyPlayingTrackId !== trackId) {
            const currentlyPlayingAudioRef = trackIdToAudioRefMap[
                currentlyPlayingTrackId
            ];
            currentlyPlayingAudioRef.current.pause()
            setIsPlaying((prevIsPlaying) => ({
                ...prevIsPlaying,
                [currentlyPlayingTrackId]: false,
            }))
        }

        if (!isPlaying[trackId]) {
            audioRef.current.volume = 0.5;
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }

    const beforeTrackOneRef = useRef()
    const beforeTrackTwoRef = useRef()
    const afterTrackOneRef = useRef()
    const afterTrackTwoRef = useRef()

    const trackIdToAudioRefMap = {
        1: beforeTrackOneRef,
        2: beforeTrackTwoRef,
        3: afterTrackOneRef,
        4: afterTrackTwoRef,
    }
    const onAudioEnded = () => {
        setIsPlaying(false)
    }
    useEffect(() => {
        beforeTrackOneRef.current.addEventListener('ended', onAudioEnded)
        beforeTrackTwoRef.current.addEventListener('ended', onAudioEnded)
        afterTrackOneRef.current.addEventListener('ended', onAudioEnded)
        afterTrackTwoRef.current.addEventListener('ended', onAudioEnded)
    }, [])

    return (
        <>
            <main className="main-element-work">
                <div className="work-content-wrap">
                    <section className="first-section-work">
                        <h2 className="before-after-title">BEFORE</h2>
                        {beforeTracks.map((track) => (
                            <div key={track.id}>
                                <div className="before-after-set">
                                    <div onClick={() => playBtnClickHandler(track.id)} className={isPlaying[track.id] ? 'before-after-column active-work-column' : 'before-after-column'}>
                                        <h3 className="tracks-author-work">{track.author}</h3>
                                        {isPlaying[track.id] ? <HiMiniPause className="pause-icon-work play-stop-icons-work" /> : <FaPlay className="play-icon-work play-stop-icons-work" />}
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                        <audio src={beforeTracks[0].track} ref={beforeTrackOneRef}></audio>
                        <audio src={beforeTracks[1].track} ref={beforeTrackTwoRef}></audio>
                    </section>
                    <section>
                        <h2 className="before-after-title">AFTER</h2>
                        {afterTracks.map((track) => (
                            <div key={track.id}>
                                <div className="before-after-set">
                                    <div onClick={() => playBtnClickHandler(track.id)} className={isPlaying[track.id] ? 'before-after-column active-work-column' : 'before-after-column'}>
                                        <h3 className="tracks-author-work">{track.author}</h3>
                                        {isPlaying[track.id] ? <HiMiniPause className="pause-icon-work play-stop-icons-work" /> : <FaPlay className="play-icon-work play-stop-icons-work" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <audio src={afterTracks[0].track} ref={afterTrackOneRef}></audio>
                        <audio src={afterTracks[1].track} ref={afterTrackTwoRef}></audio>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Work;



