import axios from 'axios';
import React, { Component } from 'react';
import CardContact from '../CardContact/CardContact';
import EmptyContact from '../EmptyContact/EmptyContact';
import Spinner from '../Spinner/Spinner';
import UpdateContact from '../UpdateContact/UpdateContact';

import './PhoneBook.css';

export default class PhoneBook extends Component {
  state = {
    data: null,
    dataLength: null,
    token: localStorage.token,
    showUpdate: true,
    catchContact: null,
  };

  getAllContact = () => {
    axios({
      method: 'get',
      url: 'https://phone-book-api.herokuapp.com/api/v1/contacts',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const dataLength = res.data.data.length;
        this.setState({
          data: res.data.data,
          dataLength: dataLength,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllContact();
  }

  deleteNumber = (event) => {
    const id = event.id;

    axios({
      method: 'delete',
      url: `https://phone-book-api.herokuapp.com/api/v1/contacts/${id}`,
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        this.getAllContact();
      })
      .catch((err) => console.log(err));
  };

  handleFavorite = (people) => {
    const idPeople = people.id;
    var favorites = JSON.parse(localStorage['favorites']); // Array

    if (favorites.indexOf(idPeople) === -1) {
      favorites.push(idPeople);
    } else {
      const index = favorites.indexOf(idPeople);
      favorites.splice(index, 1);
    }

    localStorage['favorites'] = JSON.stringify(favorites);
    this.getAllContact();
  };

  handleUpdateContact = (data) => {
    this.setState({
      showUpdate: !this.state.showUpdate,
      catchContact: data,
    });
  };

  handleShowUpdate = () => {
    this.setState({
      showUpdate: !this.state.showUpdate,
      catchContact: null,
    });
    this.getAllContact();
  };

  render() {
    var favorites = JSON.parse(localStorage['favorites']); // Array
    return (
      <div className="phone-book">
        {/* <h2>Phone Book</h2> */}
        <div className="board-phone-book">
          {this.state.data ? (
            this.state.data.map((bar, index) => {
              return (
                <div key={index}>
                  <CardContact bar={bar} handleUpdateContact={this.handleUpdateContact} favorites={favorites} handleFavorite={this.handleFavorite} deleteNumber={this.deleteNumber} />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}

          {this.state.dataLength === 0 && <EmptyContact />}

          {this.state.catchContact && <UpdateContact handleShowUpdate={this.handleShowUpdate} data={this.state.catchContact} />}
        </div>
      </div>
    );
  }
}
