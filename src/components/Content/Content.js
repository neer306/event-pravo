import React, { Component } from 'react';

import './content.scss';
import Input from "../Input/Input";
import data from '../../data/data.json';
import Event from "../Event/Event";
import Pagination from "../Pagination/Pagination";
import { monthNames } from '../../constants';
import Slider from '../Slider/Slider';
import { debounce } from '../../utils';

const EventsPerPage = 5;
const DeviceWidthBreakpoint = 1023;

class Content extends Component {

    state = {
        currentPage: 1,
        windowLength: 3,
        searchQuery: '',
        searchValue: '',
    };

    componentWillMount() {
        this.updateDimensions();
        this.changePage(this.props.page ? parseInt(this.props.page, 10) : 1);

        if (this.props.search) {
            this.setState({
                searchQuery: this.props.search,
            });
        }
    }

    componentDidMount() {
        window.addEventListener("resize", debounce(this.updateDimensions.bind(this),600));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", debounce(this.updateDimensions.bind(this), 600));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.page) {
            this.changePage(parseInt(nextProps.page, 10))
        }
    }

    render() {
        const searchRegExp = new RegExp(this.state.searchQuery, 'g');
        const applySearch = (name) => {
            return searchRegExp.test(name);
        };
        const events = data.events
            .filter(event => applySearch(event.title))
            .map((event, index) => {
                const isSameMonth = index && new Date(event.date).getMonth() === new Date(data.events[index -1].date).getMonth();
                if (isSameMonth) {
                    return (
                        <div key={index}>
                            <Event key={index} event={event}/>
                        </div>
                    )
                }
                return (
                    <div key={index}>
                        <h3>{ monthNames[new Date(event.date).getMonth()] }</h3>
                        <Event event={event}/>
                    </div>
                );
        });

        return (
            <div>
                <div className="theme">
                    <div className="theme__title">
                        <a href="#">
                            <h3>Не получилось посетить конференцию? Материалы прошедших мероприятий ЗДЕСЬ</h3>31 декабря
                        </a>
                    </div>
                    <img className={'theme__img'} src={'../../assets/images/content-banner.jpg'} alt={''} />
                </div>

                <div className={'search'}>
                    <form action={'/'} className={'search__form'}>
                        <Input
                            name={'search'}
                            placeholder={'Поиск мероприятия'}
                            value={this.state.searchValue}
                            handleOnChange={this.handleSearch.bind(this)}
                        />
                    </form>
                </div>

                <div className={'events'}>
                    { events.slice((this.state.currentPage * EventsPerPage) - EventsPerPage, this.state.currentPage * EventsPerPage) }
                </div>

                { events.length ? <Pagination
                    total={events.length}
                    limit={EventsPerPage}
                    currentPage={this.state.currentPage}
                /> : null }
                <br/>
                <h3>Право.ru рекомендует</h3>
                <Slider offset={2} windowLength={this.state.windowLength}>
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
    }

    changePage = (page) => {
        this.setState({
            currentPage: page
        });
    };

    updateDimensions() {
        this.setState({
            windowLength: window.innerWidth > DeviceWidthBreakpoint ? 3 : 2
        });
    }

    handleSearch(event) {
        this.setState({
            searchValue: event.target.value,
        });
    }
}

export default Content;
