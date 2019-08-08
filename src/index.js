import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';


import router from "./router";
import store from "./store";


import './styles/main.scss'
import './styles/normalize.css'
import 'antd/dist/antd.css';


// 监听state变化
store.subscribe(()=>{
    console.log(store.getState());
});


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {
                        // 路由配置
                        router.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))
                    }
                    <Route component={NoMatch}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}


function NoMatch({location}) {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
