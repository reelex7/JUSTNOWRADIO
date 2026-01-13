import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Init state check
        if (document.body.classList.contains('dark')) {
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = !darkMode;
        setDarkMode(isDark);
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const requestPush = () => {
        alert("Push notifications enabled!");
    };

    return (
        <div className="page-container">
            <header className="page-header">
                <h1>Settings</h1>
            </header>

            <div className="settings-section">
                <div className="setting-item">
                    <span>Dark Mode</span>
                    <button className={`toggle ${darkMode ? 'on' : ''}`} onClick={toggleDarkMode}>
                        <div className="knob"></div>
                    </button>
                </div>

                <div className="setting-item" onClick={requestPush}>
                    <span>Push Notifications</span>
                    <button className="text-btn">Enable</button>
                </div>

                <div className="setting-item">
                    <span>App Version</span>
                    <span className="version">1.0.0</span>
                </div>
            </div>

            <style>{`
                .page-container {
                    padding: 20px 16px;
                }
                .setting-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 0;
                    border-bottom: 1px solid var(--gray-200);
                }
                .dark .setting-item {
                    border-color: var(--gray-800);
                }
                .toggle {
                    width: 50px;
                    height: 28px;
                    background: var(--gray-200);
                    border-radius: 14px;
                    border: none;
                    position: relative;
                    transition: background 0.3s;
                }
                .toggle.on {
                    background: var(--primary-color);
                }
                .knob {
                    width: 24px;
                    height: 24px;
                    background: white;
                    border-radius: 50%;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    transition: left 0.3s;
                }
                .toggle.on .knob {
                    left: 24px;
                }
                .text-btn {
                    background: none;
                    border: none;
                    color: var(--accent-color);
                    font-weight: 600;
                }
                .version {
                    color: #888;
                }
            `}</style>
        </div>
    );
};

export default Settings;
