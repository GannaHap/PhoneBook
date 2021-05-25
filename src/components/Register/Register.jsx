import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertNotice from '../AlertNotice/AlertNotice';

import './Register.css';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    notice: null,
    isSuccess: null,
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleClose = () => {
    this.setState({
      notice: null,
    });
  };

  handleRegister = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'https://phone-book-api.herokuapp.com/api/v1/signup',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((res) => {
        this.setState({
          notice: null,
          isSuccess: 'Berhasil daftar. Lanjut masuk yuk',
        });
      })
      .catch((err) => {
        let message = err.response.data.data;
        this.setState({
          isSuccess: null,
          notice: message,
        });
      });
  };

  render() {
    const token = localStorage.token;

    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <div className="register">
        <h2>Daftar</h2>
        {/* Failed Register */}
        {this.state.notice && <AlertNotice notice={this.state.notice} handleClose={this.handleClose} />}

        {/* Login Success */}
        {this.state.isSuccess && (
          <div className="success-register">
            <p>{this.state.isSuccess}</p>
            <Link to="/login" className="btn-success-login">
              Login
            </Link>
          </div>
        )}
        <form onSubmit={this.handleRegister}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="input" onChange={this.handleChange} value={this.state.name} />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="input" onChange={this.handleChange} value={this.state.email} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="input" onChange={this.handleChange} value={this.state.password} />
          <div className="section-bottom">
            <Link to="/login">Sudah punya akun</Link>
            <button className="btn-register">Daftar</button>
          </div>
        </form>
      </div>
    );
  }
}
