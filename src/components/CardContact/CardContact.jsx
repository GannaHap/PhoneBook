import React, { Component } from 'react';

export default class CardContact extends Component {
  render() {
    const bar = this.props.bar;
    const favorites = this.props.favorites;

    return (
      <div className="bar">
        <div className="section-left" onClick={() => this.props.handleUpdateContact(bar)}>
          <img src={bar.image ? bar.image : '/logo512.png'} alt="" className="img-profil-bar" />
          <div className="text">
            <span>{bar.name}</span>
            <span className="number-phone">{bar.phone}</span>
          </div>
        </div>
        {favorites && (
          <div className="section-right">
            <i className={favorites.indexOf(bar.id) !== -1 ? 'fas fa-heart' : 'far fa-heart'} onClick={() => this.props.handleFavorite(bar)}></i>
            <i className="fas fa-trash-alt" onClick={() => this.props.deleteNumber(bar)}></i>
          </div>
        )}
      </div>
    );
  }
}
