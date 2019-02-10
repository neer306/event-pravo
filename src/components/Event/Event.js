import React from 'react';
import './event.scss';
import { monthNamesGenitive } from '../../constants';


const Event = ({ event }) => {
    return (
        <a href='#' className={'event'}>
            <div className="event__box">
                <img className="event__photo" src={imageSrc(event.image)} alt={''}/>
                <div className="event__content">
                    <div className="event__date">{ getDate(new Date(event.date)) }</div>
                    <b>{ event.title }</b>
                    <span>{ event.place }</span>
                </div>
            </div>
        </a>
    );
};

const imageSrc = (name) => `../../assets/images/${name}`;
const getDate = (date) => `${date.getDate()} ${monthNamesGenitive[date.getMonth()]}`;

export default Event;