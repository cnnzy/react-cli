import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Count from '../components/count';


class Page extends Component {

    // 在渲染前调用,在客户端也在服务端。
    componentWillMount() {
        console.log('componentWillMount', window);
    }

    // 在第一次渲染后调用，只在客户端。
    componentDidMount() {
        console.log('componentDidMount', window);
    }

    // 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps', window);
        console.log(newProps);
    }

    // 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate', window);
        console.log(newProps, newState);
        return true;
    }

    // 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', window);
        console.log(nextProps, nextState);
    }

    // 在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', window);
        console.log(prevProps, prevState);
    }

    // 在组件从 DOM 中移除之前立刻被调用
    componentWillUnmount() {
        console.log('componentWillUnmount', window);
    }

    render() {
        return (
            <>
                <Header/>
                <div className='BodyContent'>
                    <h1>生命周期</h1>
                    <Count/>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Page;
