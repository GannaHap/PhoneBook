import React, { Component } from 'react';

export default class AlertNotice extends Component {
  buttonClose = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <div className="notice">
        <p>{this.props.notice}</p>
        <div className="close" onClick={this.buttonClose}>
          <i className="fal fa-times"></i>
        </div>
      </div>
    );
  }
}
