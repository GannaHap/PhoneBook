import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    notice: null,
    redirect: false,
  };

  handleClose = () => {
    this.setState({
      notice: null,
    });
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://phone-book-api.herokuapp.com/api/v1/signin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((response) => {
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        let message = err.response.data.data;
        this.setState({
          notice: message,
        });
      });
  };

  render() {
    const token = localStorage.token;

    if (this.state.redirect || token) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login">
        <h2>Login</h2>
        {/* Failed Login */}
        {this.state.notice && (
          <div className="notice">
            <p>{this.state.notice}</p>
            <div className="close" onClick={this.handleClose}>
              <i className="fal fa-times"></i>
            </div>
          </div>
        )}

        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="input" value={this.state.email} onChange={this.handleChange} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="input" value={this.state.password} onChange={this.handleChange} />

          <div className="section-bottom">
            <Link to="/register">Belum punya Akun</Link>
            <button type="submit" className="btn-register">
              Masuk
            </button>
          </div>
        </form>
      </div>
    );
  }
}
