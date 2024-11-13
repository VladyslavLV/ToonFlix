import React from 'react';

const Header = ({onChangeContent}) => {

    const loadContent = () => {
    }
    return (
        <div className="header">
            <header>
                <div className="logo">Аніме & Фільми</div>
                <nav>
                    <a href="#">Головна</a>
                    <a href="#" onClick={onChangeContent}>Аніме</a>
                    <a href="#">Фільми</a>
                    <a href="#">Новинки</a>
                    <a href="#">Популярне</a>
                </nav>
                <button className="login-btn">Увійти</button>
            </header>
        </div>
    )

}

export default Header;