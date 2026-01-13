import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, Radio, Mic, Star, Settings } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import { usePlayer } from '../context/PlayerContext';

const Layout = () => {
    const { currentStation } = usePlayer();
    const location = useLocation();

    // Hide bottom nav if player is full screen? 
    // For now, keep it simple: Content -> Player (Sticky) -> Nav (Sticky)

    return (
        <div className="app-container">
            <main className="content">
                <Outlet />
            </main>

            {currentStation && <AudioPlayer />}

            <nav className="bottom-nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Home size={24} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/stations/fm" className={({ isActive }) => isActive || location.pathname.includes('stations') ? "nav-item active" : "nav-item"}>
                    <Radio size={24} />
                    <span>Stations</span>
                </NavLink>
                <NavLink to="/podcasts" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Mic size={24} />
                    <span>Podcasts</span>
                </NavLink>
                {/* Favorites placeholder link */}
                <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Star size={24} />
                    <span>Favorites</span>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                    <Settings size={24} />
                    <span>Settings</span>
                </NavLink>
            </nav>

            <style>{`
        .app-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            background-color: var(--background-color);
            color: var(--text-color);
            position: relative;
        }
        .content {
            flex: 1;
            overflow-y: auto;
            padding-bottom: 140px; /* Space for player + nav */
        }
        .bottom-nav {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: var(--background-color);
            border-top: 1px solid var(--gray-200);
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            z-index: 100;
        }
        .dark .bottom-nav {
            border-top-color: var(--gray-800);
        }
        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 10px;
            color: var(--text-color);
            opacity: 0.6;
        }
        .nav-item.active {
            opacity: 1;
            color: var(--accent-color);
        }
        .nav-item span {
            margin-top: 4px;
        }
      `}</style>
        </div>
    );
};

export default Layout;
