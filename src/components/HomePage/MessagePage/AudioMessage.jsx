import React, {useState, useEffect, useRef} from 'react'
import './MessagePage.scss'
import wave from '../../../assets/svg/wave.svg'
import play from '../../../assets/svg/play.svg'
import pause from '../../../assets/svg/pause.svg'


const AudioMessage = ({audioSrc}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const audio = useRef(null);

    useEffect(() => {
        audio.current.addEventListener('playing', () => {
            setIsPlaying(true)
        });

        audio.current.addEventListener('pause', () => {
            setIsPlaying(false)
        });

        audio.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setCurrentTime(0);
            setProgress(0);
        });

        audio.current.addEventListener('timeupdate', () => {
            const duration = (audio.current && audio.current.duration) || 0;
            setCurrentTime(audio.current.currentTime);
            setProgress((audio.current.currentTime / duration) * 100)
        })
    }, []);

    const togglePlaying = () => {
        if(!isPlaying) {
            audio.current.play()
        } else {
            audio.current.pause()
        }
    };

    const durationFormat = number => {
        const mins = Math.floor(number / 60);
        const secs = (number % 60).toFixed();
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
    };

    return (
        <div className='message__audio'>
            <audio src={audioSrc} ref={audio} preload='auto'/>
            <div className='message__audio-progress' style={{width: progress + '%'}}></div>
            <div className='message__audio-info'>
                <div className='message__audio-info-btn'>
                    <button onClick={togglePlaying}>
                        {isPlaying ?
                            <img src={pause} alt="pause"/> :
                            <img src={play} alt="play"/>
                        }
                    </button>
                </div>
                <div className='message__audio-info-wave'>
                    <img src={wave} alt="wave"/>
                </div>
                <div className='message__audio-info-time'>{durationFormat(currentTime)}</div>
            </div>
        </div>
    )
};


export default AudioMessage