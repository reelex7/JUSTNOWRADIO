import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/stations';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <header className="home-header">
                <h1>JUST NOW RADIO</h1>
                <p>Nigeria’s Sound — Live & On Demand</p>
            </header>

            <div className="section">
                <h2>Categories</h2>
                <div className="categories-grid">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="category-card"
                            onClick={() => cat.id === 'podcasts' ? navigate('/podcasts') : navigate(`/stations/${cat.id}`)}
                        >
                            <div className="cat-icon">{cat.name[0]}</div>
                            <span>{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .home-page {
            padding: 20px 16px;
        }
        .home-header {
            margin-bottom: 24px;
            text-align: center;
        }
        .home-header h1 {
            color: var(--primary-color);
            margin: 0;
            font-size: 24px;
        }
        .dark .home-header h1 {
            color: white;
        }
        .home-header p {
            color: var(--accent-color);
            margin: 8px 0 0;
            font-size: 14px;
            font-weight: 500;
        }
        .section h2 {
            font-size: 18px;
            margin-bottom: 16px;
        }
        .categories-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        .category-card {
            background: var(--background-color);
            border: 1px solid var(--gray-200);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: transform 0.2s;
        }
        .dark .category-card {
            background-color: var(--gray-100);
            border-color: var(--gray-200);
        }
        .category-card:active {
            transform: scale(0.98);
        }
        .cat-icon {
            width: 48px;
            height: 48px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 12px;
        }
      `}</style>
        </div>
    );
};

export default Home;
