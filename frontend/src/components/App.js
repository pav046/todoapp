import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Login from './auth/Login';
import Register from './auth/Register';
import Logout from './auth/Logout';
import PrivateRoute from './PrivateRoute';
import DashBoard from './todo/DashBoard';
import store from '../store';

const alertOptions = {
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: '30px',
    transition: transitions.SCALE
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <>
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Routes>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/logout" element={<Logout />} />
                                    {/* Используем PrivateRoute для защиты маршрута */}
                                    <Route element={<PrivateRoute />}>
                                        <Route path="/" element={<DashBoard />} />
                                    </Route>
                                </Routes>
                            </div>
                        </>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
