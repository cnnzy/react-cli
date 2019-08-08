import React, {Component} from 'react';
import {Button, Slider, Switch} from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';
import Count from '../components/count';


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            disabled: false,
        };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleDisabledChange = disabled => {
        this.setState({disabled});
    };

    render() {
        const {size} = this.state;
        const {disabled} = this.state;
        return (
            <>
                <Header/>
                <div className='BodyContent'>
                    <h1>计时器：</h1>
                    <h2>Seconds: {this.state.seconds}</h2>
                    <Count/>

                    <hr/>
                    <div>
                        <Button type="primary">Primary</Button>
                        <Button size={size}>Normal</Button>
                        <Button type="dashed" size={size}>Dashed</Button>
                        <Button type="danger" size={size}>Danger</Button>
                        <Button type="link" size={size}>Link</Button>
                    </div>

                    <hr/>
                    <div>
                        <Slider defaultValue={30} disabled={disabled}/>
                        <Slider range defaultValue={[20, 50]} disabled={disabled}/>
                        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange}/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Page;
