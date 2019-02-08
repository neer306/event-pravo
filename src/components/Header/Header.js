import React from 'react';
import './header.scss';


const Header = () => {
    return (
        <header>
            <div className={'container'}>
                <div className={'banner'}>
                    <img src={'../../assets/images/header-banner.gif'} />
                </div>
                <nav>
                    <a href='#' className={'logo'}>
                        <img src={'../../assets/images/logo.png'} />
                    </a>
                    <div className={'nav'}>
                        <a className={'nav__item nav__item_active'}>Главная</a>
                        <a className={'nav__item'}>О нас</a>
                        <a className={'nav__item'}>Спонсорам</a>
                        <a className={'nav__item'}>Архив</a>
                    </div>
                    <a href='#' className={'sublogo'}>
                        <img src={'../../assets/images/sublogo.png'} />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;