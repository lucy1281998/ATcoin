import React,{Component} from 'react'
import './contact.css'

class Contact extends Component{
    render(){
        return(
        <div className="container-fluid contact">
        <div className='row '>
        <div className="col-sm-6 col-xl-6">
        <form className="form-group col-sm-12 col-xl-8 offset-xl-8 offset-md-7">
        <br/><br/><br/><br/><br/>
        <h2 className="text-white">Contact Us</h2><br/>
        <input
        type="text"
        className="form-control form-control-xl"
        placeholder="Full Name"
        /><br/>
        <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Email"
        /><br/>
        <div>
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Mobile no."
        />
        </div><br/>
        <div>
        <textarea
        type="text"
        className="form-control form-control-lg"
        placeholder="Subject."
        />
        </div><br/>
        <input type="submit" className="btn btn-info btn-block mt-2" />
        </form>
        
        </div>        	
        
        <div className="col-sm-3"></div>
        </div>
        </div>
        
        )
    }
}

export default Contact;