import React from 'react';
import './login.css'
class Login extends React.Component  {
  render() {
    return(
      <div className="container-fluid login">
      <br/><br/><br/><br/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <h1 className="display-4 text-center text-white">Log In</h1>
              <p className="lead text-center text-white">
                Login your registered credentials account
              </p>
              <form>
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;