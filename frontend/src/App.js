// frontend/src/App.js

import React from 'react';
import Header from './components/Header';
import YatraList from './components/Yatra/YatraList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={YatraList} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
