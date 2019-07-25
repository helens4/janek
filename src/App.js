import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import Order from "./components/order";
import { Redirect, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    logged: false
  };

  loginStateHandler = (login, password) => {
    if (login === "r" && password === "r") {
      this.setState({
        logged: true
      });
    }
  };

  render() {
    return (
      <div>
        <div className="app">
          <header className="app-header">
            <img className="icon" src="icons/book.png" />
            <div> Xprint </div>
          </header>
          <main>
            {this.state.logged ? (
              <div>
                <BrowserRouter>
                  <Route path="/order" component={Order} />

                  <div>
                    <Redirect to="/order" />
                  </div>
                </BrowserRouter>
              </div>
            ) : (
              <Login loginState={this.loginStateHandler} />
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
