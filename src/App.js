import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import ReallySmoothScroll from 'really-smooth-scroll'
import Navbar from './component/navbar'
import Home from './component/home'
import Login from './component/authentication/Login';
import Contact from './component/contact/Contact';

import Registration from './component/authentication/Registration';
ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/contact" component={Contact}/>
              </Switch>
          </div>      
        </BrowserRouter>      
      </div>
    );
  }
}

export default App;
