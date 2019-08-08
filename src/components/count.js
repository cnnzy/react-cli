import React, {Component} from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        plus: () => {
            dispatch({type: 'INCREMENT'});
        },
        Less: () => {
            dispatch({type: 'DECREMENT'});
        },
    }
};

class Page extends Component {
    render() {
        const style = {
            textAlign: 'center',
            fontSize: '30px',
        };
        const spanStyle = {
            margin: '30px',
        };
        return (
            <>
                <h1 style={style}>
                    <button onClick={this.props.Less}>-</button>
                    <span style={spanStyle}>{this.props.counter}</span>
                    <button onClick={this.props.plus}>+</button>
                </h1>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
