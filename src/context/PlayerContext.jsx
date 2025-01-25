import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    // const url = "https://srfrozenfoods-server.netlify.app/api/";
    const url = process.env.BACKEND_SERVER_URL;

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false)
    const [token, setToken] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState({});
    const [isLoginPortal, setIsLoginPortal] = useState(false);

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        audioRef.current.volume = 0.1;
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const previous = async () => {
        if (track.id > 0) {
          setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
          await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = (e) => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime * 100 / audioRef.current.duration)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef])

    const contextValue = {
       url,user, setUser, token, setToken, showLogin, setShowLogin, audioRef, track, setTrack, playStatus, setPlayStatus, next, previous, play, pause, playWithId, seekBar, seekBg, seekSong, time, isLoginPortal, setIsLoginPortal
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;