import Slider from "../../containers/Content/Content";
import React from "react";

import './recommendation.scss';

const Recommendation = ({ windowLength, offset }) => {
    return (
        <div>
            <h3>Право.ru рекомендует</h3>
            <Slider offset={offset} windowLength={windowLength}>
                <div className={'recommend-item'}>
                    <a className={'recommend-item__link'} href='#'>
                        Семинар "Планирование передачи состояния по наследству и наследственные споры"
                    </a>
                    <span>11 февраля</span>
                </div>
                <div className={'recommend-item'}>
                    <a className={'recommend-item__link'} href='#'>
                        XVI международная научно-практическая конференция "Ковалевские чтения 2019", Екатеринбург
                    </a>
                    <span>14 февраля</span>
                </div>
                <div className={'recommend-item'}>
                    <a className={'recommend-item__link'} href='#'>
                        Банкротство юридических лиц и граждан: анализ актуальных новелл законодательства и практики применения
                    </a>
                    <span>21 февраля</span>
                </div>
                <div className={'recommend-item'}>
                    <a className={'recommend-item__link'} href='#'>
                        Семинар "Поставка: основные проблемы договорной работы"
                    </a>
                    <span>28 февраля</span>
                </div>
                <div className={'recommend-item'}>
                    <a className={'recommend-item__link'} href='#'>
                        Онлайн-курс для юристов «Юридический Due Diligence»
                    </a>
                    <span>11 марта</span>
                </div>
            </Slider>
        </div>
    );
};

export default Recommendation;
