import React from 'react';
import { Play, Pause, X } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const AudioPlayer = () => {
    const { currentStation, isPlaying, togglePlay } = usePlayer();

    if (!currentStation) return null;

    return (
        <div className="mini-player">
            <div className="player-info">
                <img src={currentStation.logo} alt={currentStation.name} className="player-thumb" />
                <div className="player-text">
                    <div className="player-title">{currentStation.name}</div>
                    <div className="player-status">Live</div>
                </div>
            </div>
            <button onClick={togglePlay} className="play-btn">
                {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
            </button>

            <style>{`
                .mini-player {
                    position: fixed;
                    bottom: 60px; /* Height of bottom nav */
                    left: 0;
                    right: 0;
                    height: 64px;
                    background-color: var(--primary-color);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px;
                    z-index: 101;
                    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .player-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .player-thumb {
                    width: 40px;
                    height: 40px;
                    border-radius: 4px;
                    object-fit: cover;
                    background-color: white;
                }
                .player-text {
                    display: flex;
                    flex-direction: column;
                }
                .player-title {
                    font-weight: 600;
                    font-size: 14px;
                }
                .player-status {
                    font-size: 12px;
                    opacity: 0.8;
                }
                .play-btn {
                    background: var(--accent-color);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    padding: 0;
                }
            `}</style>
        </div>
    );
};

export default AudioPlayer;
