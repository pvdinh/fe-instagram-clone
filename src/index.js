import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import createSagaMiddleware from'redux-saga'
import rootSaga from "./redux/sagas/rootSaga";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware=createSagaMiddleware()
const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);
sagaMiddleware.run(rootSaga)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
