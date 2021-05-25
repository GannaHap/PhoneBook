import axios from 'axios';
import React, { Component } from 'react';
import CardContact from '../CardContact/CardContact';
import EmptyContact from '../EmptyContact/EmptyContact';
import Spinner from '../Spinner/Spinner';

import './Favorites.css';

export default class Favorites extends Component {
  state = {
    token: localStorage.token,
    listFavorite: [],
  };

  getContactFavorite = (id) => {
    axios({
      method: 'get',
      url: `https://phone-book-api.herokuapp.com/api/v1/contacts/${id}`,
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const dataContact = res.data.data;
        let arrContact = this.state.listFavorite;
        arrContact.push(dataContact);
        this.setState({
          listFavorite: arrContact,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  getAllContactFavorite = () => {
    const id = JSON.parse(localStorage['favorites']);

    if (id.length > 0) {
      id.forEach((data) => {
        this.getContactFavorite(data);
      });
    }
  };

  componentDidMount() {
    this.getAllContactFavorite();
  }

  render() {
    return (
      <div className="favorites">
        <div className="board-favorites">
          {this.state.listFavorite ? (
            this.state.listFavorite.map((list, index) => {
              return (
                <div key={index}>
                  <CardContact bar={list} />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}

          {this.state.listFavorite === 0 && <EmptyContact />}
        </div>
      </div>
    );
  }
}
