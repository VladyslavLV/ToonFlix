import React from 'react';

const Anime = () => {
    return (
        <div className="Anime">
            <div className="content-section">
                <h2>Популярне зараз</h2>
                <div className="movie-grid">
                    <div className="movie-card">
                        <img src="anime1.jpg" alt="Аніме 1" />
                        <div className="info">
                            <h3>Аніме Назва 1</h3>
                            <p>Опис аніме або фільму...</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src="anime2.jpg" alt="Аніме 2" />
                        <div className="info">
                            <h3>Аніме Назва 2</h3>
                            <p>Опис аніме або фільму...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anime;
