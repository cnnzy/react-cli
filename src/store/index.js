import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {counter} from './reducer';

const rootReducer = combineReducers({
    counter,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());


// store.dispatch({type: 'INCREMENT'});
// console.log('-----');
//
// store.dispatch({type: 'INCREMENT'});
// console.log('-----');
//
// store.dispatch({type: 'INCREMENT'});
// console.log('-----');
//
// store.dispatch({type: 'DECREMENT'});
// console.log('-----');

export default store;
