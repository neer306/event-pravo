import React from "react";
import './theme.scss';


const Theme = () => {
    return (
        <div className="theme">
            <div className="theme__title">
                <a href="#">
                    <h3>Не получилось посетить конференцию? Материалы прошедших мероприятий ЗДЕСЬ</h3>31 декабря
                </a>
            </div>
            <img className={'theme__img'} src={'../../assets/images/content-banner.jpg'} alt={''} />
        </div>
    );
};

export default Theme;
