import React from 'react'

import "./styles.css";

export const Login = () => {

const handleLogin = 0;
const password = 0;
const cedula="portorrealjeuri@gmail.com";
const handleInputChange=0;
    return (
        
        <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>LOGIN</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Cedula *"
                  name="cedula"
                  value={cedula}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group mt-4">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
              
            </form>
          </div>
          <div className="col-md-6 login-form-2 container">
            <h3>CHATBOT 🤖</h3>
          </div>
        </div>
      </div>
    )
}

export default Login;