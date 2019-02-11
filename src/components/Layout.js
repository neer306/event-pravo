import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import queryString from 'query-string';

import Header from "./Header/Header";
import Content from "../containers/Content/Content";
import Rightbar from "./Rightbar/Rightbar";
import './layout.scss';


class Index extends Component {
    render() {
        const values = queryString.parse(this.props.location.search);

        return (
            <div>
                <Header/>
                <div className={'main container'}>
                    <Content page={values.page} search={values.search}/>
                    <Rightbar/>
                </div>
            </div>
        );
    }
}

const Layout = () => (
    <Router>
        <div>
            <Route exact path="/" component={Index}/>
        </div>
    </Router>
);

export default Layout;
