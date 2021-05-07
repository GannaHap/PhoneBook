import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import AddContact from '../AddContact/AddContact';
import Favorites from '../Favorites/Favorites';
import PhoneBook from '../PhoneBook/PhoneBook';

import './Home.css';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
  state = {
    component: 'PhoneBook',
  };

  handleSwitchComp = (value) => {
    this.setState({
      component: value,
    });
  };

  render() {
    const token = window.localStorage.token;

    if (!token) {
      return <Redirect to="/login" />;
    }

    const switchComponent = () => {
      switch (this.state.component) {
        case 'Favorites':
          return <Favorites />;
        case 'PhoneBook':
          return <PhoneBook />;
        case 'AddContact':
          return <AddContact />;

        default:
          return <h1>No project match</h1>;
      }
    };

    return (
      <div className="home">
        <Navbar handleSwitchComp={this.handleSwitchComp} />
        {switchComponent()}
      </div>
    );
  }
}
