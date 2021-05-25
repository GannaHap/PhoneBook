import React, { Component } from 'react';

export default class EmptyContact extends Component {
  render() {
    return (
      <div className="empty">
        <i className="far fa-address-book"></i>
        <span>Kontak masih kosong</span>
      </div>
    );
  }
}
