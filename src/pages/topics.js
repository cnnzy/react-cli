import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Count from '../components/count';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '123'
        };
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    };

    render() {
        return (
            <>
                <Header/>
                <div className='BodyContent'>
                    <h1>添加列表</h1>
                    <input onChange={this.handleChange} value={this.state.text}/>
                    <button onClick={this.handleSubmit}>Add #{this.state.items.length + 1}</button>
                    <TodoList items={this.state.items}/>
                    <Count/>
                </div>
                <Footer/>
            </>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default Page;
