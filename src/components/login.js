import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    login: "",
    password: ""
  };

  handlerLogin = event => {
    this.setState({
      login: event.target.value
    });
  };

  handlerPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    const login = this.state.login;
    const passwd = this.state.password;
    this.props.loginState(login, passwd);
  };

  render() {
    return (
      <div className="login">
        <main>
          <section className="left">
            <h1> Welcome in Xprint </h1>
            <h2>
              We will print and deliver your printings directly to your door
            </h2>
          </section>
          <section className="right">
            <div className="login-form">
              <p className="title">Login Here </p>
              <form>
                <input
                  type="text"
                  placeholder="Email"
                  value={this.state.login}
                  onChange={this.handlerLogin}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlerPassword}
                />

                <input type="submit" value="Login" onClick={this.handleClick} />
              </form>

              <p className="register-title">
                Don't have account yet? Register here!
              </p>
              <button className="register-button"> Register </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Login;
