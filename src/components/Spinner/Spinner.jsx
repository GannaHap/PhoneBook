import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="loader">
        <img src="/loading.gif" alt="" />
      </div>
    );
  }
}
