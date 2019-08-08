import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/header.scss'

class Page extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li><NavLink to="/" exact activeClassName="selected">首页</NavLink></li>
                    <li><NavLink to="/topics" activeClassName="selected">话题</NavLink></li>
                    <li><NavLink to="/hot" activeClassName="selected">热榜</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">关于</NavLink></li>
                </ul>
            </header>
        )
    }
}

export default Page;
