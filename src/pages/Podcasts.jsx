import React from 'react';
import { stations } from '../data/stations';
import { usePlayer } from '../context/PlayerContext';
import { Play } from 'lucide-react';

const Podcasts = () => {
    const { playStation, currentStation, isPlaying } = usePlayer();
    const podcastList = stations.filter(s => s.category === 'podcasts' || s.isPodcast);

    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Podcasts</h1>
            </header>

            <div className="stations-list">
                {podcastList.map(item => (
                    <div key={item.id} className="station-card" onClick={() => playStation(item)}>
                        <img src={item.logo} alt={item.name} className="station-logo" />
                        <div className="station-info">
                            <h3>{item.name}</h3>
                            <p>Latest Episode</p>
                        </div>
                        <div className="play-indicator">
                            {currentStation?.id === item.id && isPlaying ?
                                <span className="playing-anim">III</span> :
                                <Play size={20} fill="var(--primary-color)" />
                            }
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .page-container {
                    padding: 20px 16px;
                }
                .page-header h1 {
                    margin-bottom: 24px;
                    font-size: 24px;
                }
                .stations-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .station-card {
                    display: flex;
                    align-items: center;
                    padding: 12px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    cursor: pointer;
                }
                .dark .station-card {
                    background: var(--gray-100);
                }
                .station-logo {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    margin-right: 16px;
                    object-fit: cover;
                    background: #eee;
                }
                .station-info {
                    flex: 1;
                }
                .station-info h3 {
                    margin: 0 0 4px;
                    font-size: 16px;
                }
                .station-info p {
                    margin: 0;
                    font-size: 12px;
                    color: #666;
                }
                .play-indicator {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .playing-anim {
                    font-weight: 900;
                    color: var(--accent-color);
                    letter-spacing: 1px;
                    animation: pulse 1s infinite;
                }
            `}</style>
        </div>
    );
};

export default Podcasts;
