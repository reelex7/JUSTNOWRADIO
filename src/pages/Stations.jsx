import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stations, categories } from '../data/stations';
import { usePlayer } from '../context/PlayerContext';
import { Play } from 'lucide-react';

const Stations = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { playStation, currentStation, isPlaying } = usePlayer();

    const categoryInfo = categories.find(c => c.id === category);
    const stationList = stations.filter(s => s.category === category);

    return (
        <div className="page-container">
            <header className="page-header">
                <button onClick={() => navigate(-1)} className="back-btn">&larr;</button>
                <h1>{categoryInfo?.name || 'Stations'}</h1>
            </header>

            <div className="stations-list">
                {stationList.map(station => (
                    <div key={station.id} className="station-card" onClick={() => playStation(station)}>
                        <img src={station.logo} alt={station.name} className="station-logo" />
                        <div className="station-info">
                            <h3>{station.name}</h3>
                            <p>Live Stream</p>
                        </div>
                        <div className="play-indicator">
                            {currentStation?.id === station.id && isPlaying ?
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
                .page-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 24px;
                }
                .back-btn {
                    background: none;
                    border: none;
                    font-size: 24px;
                    margin-right: 16px;
                    padding: 0;
                    color: var(--text-color);
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
                @keyframes pulse {
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default Stations;
