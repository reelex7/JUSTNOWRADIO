import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
    const [currentStation, setCurrentStation] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => setIsPlaying(false);
        const handleError = (e) => {
            console.error("Audio Error:", e);
            setIsPlaying(false);
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('error', handleError);
            audio.pause();
        };
    }, []);

    useEffect(() => {
        if (currentStation) {
            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: currentStation.name,
                    artist: "JUST NOW RADIO",
                    artwork: [
                        { src: currentStation.logo, sizes: '512x512', type: 'image/png' },
                    ]
                });

                navigator.mediaSession.setActionHandler('play', play);
                navigator.mediaSession.setActionHandler('pause', pause);
            }
        }
    }, [currentStation]);

    const playStation = (station) => {
        const audio = audioRef.current;

        // If clicking same station, toggle play
        if (currentStation?.id === station.id) {
            togglePlay();
            return;
        }

        // New station
        setCurrentStation(station);
        audio.src = station.streamUrl;
        audio.play().then(() => setIsPlaying(true)).catch(e => console.error("Play failed", e));
    };

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(e => console.error("Play failed", e));
        }
    };

    const play = () => {
        audioRef.current.play().then(() => setIsPlaying(true));
    }

    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    return (
        <PlayerContext.Provider value={{ currentStation, isPlaying, playStation, togglePlay, volume, setVolume }}>
            {children}
        </PlayerContext.Provider>
    );
};
