import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
//Redux
import {Provider} from 'react-redux'
//Store
import {default as store} from './store'
//Components
import {loadProgressBar} from 'axios-progress-bar'
import Container from "./pages/container";
import Routes from "./Routes";

//Assets
import 'axios-progress-bar/dist/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
    render() {
        loadProgressBar();
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Container>
                        <Routes/>
                    </Container>
                </BrowserRouter>
            </Provider>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
