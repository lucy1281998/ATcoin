import React,{Component} from 'react'
import "../style/navbar.css"
import { AnimatedBg, Transition } from 'scroll-background';

import {Link} from 'react-router-dom';

class Navbar extends  Component
{
    render(){
       
            return(
                <AnimatedBg>
                <Transition height="0px" from="#0D47A1" to="#388E3C" />
                <nav className="navbar navbar-expand-md fixed-top">
                <Link className="navbar-brand" to="/"><img src={ require('../logo/logo.png')}/></Link>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">WALLET</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">TEAM</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/">REFERAL</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/">COMMUNITY</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
                </li> 
                <li className="nav-item">
                <button class="button btn-primary">
                <Link className="nav-link" to="/login">LOGIN</Link>
                </button>
                </li>               
                </ul>
                </div> 
            </nav>
            </AnimatedBg>
        );
    }
    
}

export default Navbar