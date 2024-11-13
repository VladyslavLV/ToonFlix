import React from 'react';

const Content = () => {
    return (
        <div className="Content">
            <div className="banner">
                <h1>Відкрийте світ аніме та фільмів</h1>
                <p>Насолоджуйтесь найкращими релізами в HD якості прямо зараз!</p>
                <a href="/" className="watch-now">Дивитись зараз</a>
            </div>
            <div className="content-section">
                <h2>Популярне зараз</h2>
                <div className="movie-grid">
                    <div className="movie-card">
                        <img src="#" alt="Аніме 1" />
                        <div className="info">
                            <h3>Аніме Назва 1</h3>
                            <p>Опис аніме або фільму...</p>
                        </div>
                    </div>
                    <div className="movie-card">
                        <img src="#" alt="Аніме 2" />
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

export default Content;
