import React from "react";

import './events-list.scss';
import { monthNames } from "../../constants";
import Event from "../Event/Event";


const eventsRepresent = events => {
    events.map((event, index) => {
        const isSameMonth = index && new Date(event.date).getMonth() === new Date(events[index - 1].date).getMonth();
        if (isSameMonth) {
            return (
                <div key={index}>
                    <Event key={index} event={event}/>
                </div>
            )
        }
        return (
            <div key={index}>
                <h3>{monthNames[new Date(event.date).getMonth()]}</h3>
                <Event event={event}/>
            </div>
        );
    });
};


const EventsList = ({ events, currentPage, eventsPerPage }) => {
    return (
        <div className={'events-list'}>
            { eventsRepresent(events).slice((currentPage * eventsPerPage) - eventsPerPage, currentPage * eventsPerPage) }
        </div>
    );
};

export default EventsList;
