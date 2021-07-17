import React, { Component } from 'react';
import Home from '../screens/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../screens/login/Login';
import User from '../screens/user/User';
import Events from '../screens/events/Events';

//import Profile from '../screens/profile/Profile';

//Controller class for implementing Routing functionality

class Controller extends Component {

  constructor() {
    super();
    //This is the base url of the API end points
    this.baseUrl = "http://localhost:9000/api/v1";
  }

  render() {
    return (
      <Router>
        <div className="main-container">
           <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl}/>} />
           <Route exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} />}/>
           <Route exact path='/user' render={(props) => <User {...props} baseUrl={this.baseUrl} />}/>
           <Route exact path='/events' render={(props) => <Events {...props} baseUrl={this.baseUrl} />}/>


        </div>
      </Router>
    )
  }
}

export default Controller;