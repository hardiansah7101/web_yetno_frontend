import React from "react";
import Helmet from "react-helmet";

export default function Login() {
  return (
    <div style={{ backgroundImage: 'url(image/bgLogin.jpg)' }}>
      <Helmet>
        <link rel="stylesheet" href="css/styleLogin.css" />
      </Helmet>
      <div className="container">
        <h4 className="text-center">FORM LOGIN</h4>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" className="form-control" placeholder="Masukan Username Anda" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Masukan Password Anda" />
          </div>
          <a href="indexHome.html" className="btn btn-outline-success btn-sm">Login</a>
        </form>
      </div>

    </div>
  )
}