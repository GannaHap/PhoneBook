import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
  handleMenuActive = (link) => {
    const menuNav = document.querySelectorAll('nav .btn-menu');
    menuNav.forEach((menu, index) => {
      menu.classList.remove('active');
    });

    link.currentTarget.classList.add('active');
  };

  handleChange = (event) => {
    this.handleMenuActive(event);
    this.props.handleSwitchComp(event.currentTarget.name);
  };

  render() {
    const logOut = () => {
      localStorage.clear();
    };

    return (
      <nav>
        <button onClick={(e) => this.handleChange(e)} name="PhoneBook" className="btn-menu active">
          <i className="fas fa-address-book"></i>
          <span>PhoneBook</span>
        </button>
        <button onClick={(e) => this.handleChange(e)} name="Favorites" className="btn-menu">
          <i className="fas fa-heart"></i>
          <span>Favorites</span>
        </button>
        <button onClick={(e) => this.handleChange(e)} name="AddContact" className="btn-menu">
          <i className="fas fa-phone"></i>
          <span>Add Contact</span>
        </button>
        <Link to="/login" className="btn-menu" onClick={() => logOut()}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </Link>
      </nav>
    );
  }
}
