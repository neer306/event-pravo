import React, { Component } from 'react';
import './content.scss';
import Input from "../Input/Input";
import data from '../../data/data.json';
import Event from "../Event/Event";
import Pagination from "../Pagination/Pagination";

const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
const eventsPerPage = 5;


class Content extends Component {

    state = {
        currentPage: 1,
    };

    render() {
        const events = data.events.map((event, index) => {
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
                    <form className={'search__form'}>
                        <Input placeholder={'Поиск мероприятия'}/>
                    </form>
                </div>

                <div className={'events'}>
                    { events.slice((this.state.currentPage * eventsPerPage) - eventsPerPage, this.state.currentPage * eventsPerPage) }
                </div>

                <Pagination
                    total={events.length}
                    limit={eventsPerPage}
                    currentPage={this.state.currentPage}
                    changePageHandler={this.changePage.bind(this)}
                />
            </div>
        );
    }

    changePage = (page) => {
        this.setState({
            currentPage: page
        });
    };
}

export default Content;