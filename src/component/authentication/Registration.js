import React from 'react';
import './Registration.css'

class Registration extends React.Component  {
  render() {
    return (
      <div className="container-fluid register">  
      <br/><br/><br/><br/>

        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <h1 className="display-4 text-center text-white">Sign Up</h1>
              <p className="lead text-center text-white">
                Create your own account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"                   
                    placeholder="Name"
                    name="name"
                   
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    
                  />
                  

                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                   
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                   
                  />
                 
                </div>
                <input type="submit" className="btn btn-info btn-block mt-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Registration;