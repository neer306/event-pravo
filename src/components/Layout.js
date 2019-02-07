import React, { Component } from 'react';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Rightbar from "./Rightbar/Rightbar";
import './layout.scss'

class Layout extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className={'main container'}>
                    <Content/>
                    <Rightbar/>
                </div>
            </div>
        );
    }
}

export default Layout;