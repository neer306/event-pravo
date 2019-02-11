import React, { Component } from 'react';

import './content.scss';
import data from '../../data/data.json';
import { debounce } from '../../utils';
import Theme from "../../components/Theme/Theme";
import SearchForm from "../../components/SearchForm/SearchForm";

import Recommendation from "../../components/Recommendation/Recommendation";
// import EventsList from "../../components/EventsList/EventsList";

const DeviceWidthBreakpoint = 1023;
export const EventsPerPage = 5;

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
        const events = data.events.filter(event => applySearch(event.title));

        return (
            <div>
                <Theme/>
                <SearchForm placeholder={'Поиск мероприятия'}
                            searchValue={ this.state.searchValue }
                            handleSearch={this.handleSearch.bind(this)}
                />

                <div className={'events'}>
                    { events.slice((this.state.currentPage * EventsPerPage) - EventsPerPage, this.state.currentPage * EventsPerPage) }
                </div>
                <EventsList currentPage={this.state.currentPage} eventsPerPage={EventsPerPage} events={events} />

                { events.length ? <Pagination
                    total={events.length}
                    limit={EventsPerPage}
                    currentPage={this.state.currentPage}
                /> : null }

                <Recommendation/>
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
