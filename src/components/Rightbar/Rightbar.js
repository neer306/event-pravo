import React, { Component } from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";
import './rightbar.scss';


class Rightbar extends Component {

    render() {
        return (
            <div className={'rightbar'}>
                <a href='#' className={'rightbar__banner'}>
                    <img className={'rightbar__banner-img'} src={'../../assets/images/rightbar-banner.jpg'} />
                    <img className={'rightbar__banner-img-m'} src={'../../assets/images/header-banner.gif'} />
                </a>
                <h3>Реклама</h3>
                <div className={'rightbar__box'}>
                    <p>
                        <a href="https://amulex.ru/#news-section" rel="noopener noreferrer" target="_blank">НАЦИОНАЛЬНАЯ ЮРИДИЧЕСКАЯ СЛУЖБА «АМУЛЕКС»</a> — одна из крупнейших юридических компаний в России, оказывающая юридические услуги корпоративным и частным клиентам в различных отраслях права и экономики, совмещая новейшие достижения &nbsp;it-технологий в сфере Legal tech с комплексным правовым&nbsp; клиентоориентированным консалтингом <a href="https://amulex.ru/#news-section" rel="noopener noreferrer" target="_blank">&gt;&gt;&gt;</a>
                    </p>
                </div>
                <h3>Подписаться на новости</h3>
                <form className={'rightbar__form'}>
                    <Input placeholder={'Введите e-mail'}/>
                    <Button type={'submit'}>Подписаться</Button>
                </form>
                <h3>План мероприятий - 2018</h3>
                <Button>Подписаться</Button>
            </div>
        );
    }
}

export default Rightbar;
