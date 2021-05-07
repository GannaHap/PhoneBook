import axios from 'axios';
import React, { Component } from 'react';

import './PhoneBook.css';

export default class PhoneBook extends Component {
  state = {
    data: null,
    dataLength: null,
    token: localStorage.token,
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

  render() {
    return (
      <div className="phone-book">
        {/* <h2>Phone Book</h2> */}
        <div className="board-phone-book">
          {this.state.data ? (
            this.state.data.map((bar, index) => {
              return (
                <div className="bar" key={index}>
                  <div className="section-left">
                    <img src={bar.image ? bar.image : '/logo512.png'} alt="" className="img-profil-bar" />
                    <div className="text">
                      <span>{bar.name}</span>
                      <span className="number-phone">{bar.phone}</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-trash-alt" onClick={() => this.deleteNumber(bar)}></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loader">
              <img src="/loading.gif" alt="" />
            </div>
          )}

          {this.state.dataLength === 0 && (
            <div className="empty">
              <i className="far fa-address-book"></i>
              <span>Kontak masih kosong</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
