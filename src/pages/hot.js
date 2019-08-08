import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Count from '../components/count';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello, world!'};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <>
                <Header/>
                <div className='BodyContent'>
                    <h1>双向数据绑定</h1>
                    {/*defaultValue，表明你这个组件是个非受控组件，无法人为控制value。而defaultValue只能作用一次*/}
                    <input type="text" onChange={this.handleChange} defaultValue={this.state.value}/>
                    <h3>{this.state.value}</h3>
                    <Count/>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Page;
