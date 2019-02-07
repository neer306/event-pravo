import React from 'react';
import './header.scss';


const Header = () => {
    return (
        <header className={'container'}>
            <div className={'banner'}>

            </div>
            <nav>
                <a href='#' className={'logo'}>

                </a>
                <div className={'nav'}>
                    <a className={'nav__item'}>Главная</a>
                    <a className={'nav__item'}>О нас</a>
                    <a className={'nav__item'}>Спонсорам</a>
                    <a className={'nav__item'}>Архив</a>
                </div>
                <a href='#' className={'sublogo'}>

                </a>
            </nav>
        </header>
    );
};

export default Header;