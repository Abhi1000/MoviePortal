import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './LoginComponent/login.js'
import Register from './RegisterComponent/register.js'
import DashboardComponent from './DashboardComponent/dashboard.js'
import MovieDetailComponent from './movieDetailComponent/movie.js'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="/movie" component={MovieDetailComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
