import React, { Component } from 'react';
import axios from 'axios';

import './AddContact.css';

export default class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    job: '',
    company: '',
    email: '',
    img: '',
    isSuccess: null,
    notice: null,
  };

  handleClose = () => {
    this.setState({
      notice: null,
    });
  };

  handleAddContact = (event) => {
    event.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.append('name', this.state.name);
    bodyFormData.append('phone', this.state.phone);
    bodyFormData.append('job', this.state.job);
    bodyFormData.append('company', this.state.company);
    bodyFormData.append('email', this.state.email);
    bodyFormData.append('image', this.state.img);

    const token = localStorage.token;

    axios({
      method: 'post',
      url: 'https://phone-book-api.herokuapp.com/api/v1/contacts',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: bodyFormData,
    })
      .then((response) => {
        this.setState({
          name: '',
          phone: '',
          job: '',
          company: '',
          email: '',
          img: '',
          notice: null,
          isSuccess: 'Berhasil Menambahkan Kontak',
        });
      })
      .catch((err) => {
        const message = err.response.data.data;
        this.setState({
          isSuccess: null,
          notice: message,
        });
      });
  };

  handleChangeInput = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      upload: value,
    });
  };

  handleChangePict = (e) => {
    const target = e.target;
    const file = target.files[0];

    this.setState({
      img: file,
    });
  };

  render() {
    return (
      <div className="add-contact">
        {/* Failed Add Contact */}
        {this.state.notice && (
          <div className="notice">
            <p>{this.state.notice}</p>
            <div className="close" onClick={this.handleClose}>
              <i className="fal fa-times"></i>
            </div>
          </div>
        )}
        {/* Success Add Contact */}
        {this.state.isSuccess && (
          <div className="success-add-contact">
            <p>{this.state.isSuccess}</p>
            <div className="close" onClick={this.handleClose}>
              <i className="fal fa-times"></i>
            </div>
          </div>
        )}
        <form className="form" onSubmit={this.handleAddContact}>
          <div className="img-profil-add-contact">
            <img src="/logo512.png" alt="" />
            <label htmlFor="img">
              <i className="fas fa-edit"></i>
              <span>Change</span>
            </label>
            <input type="file" id="img" name="img" accept="image/*" onChange={this.handleChangePict} />
          </div>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="input" autoComplete="off" value={this.state.name} onChange={this.handleChangeInput} required />

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" className="input" autoComplete="off" value={this.state.phone} onChange={this.handleChangeInput} required />

          <label htmlFor="job">Job</label>
          <input type="text" id="job" name="job" className="input" autoComplete="off" value={this.state.job} onChange={this.handleChangeInput} />

          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" className="input" autoComplete="off" value={this.state.company} onChange={this.handleChangeInput} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="input" autoComplete="off" value={this.state.email} onChange={this.handleChangeInput} />

          <button type="submit" className="btn-add">
            Add
          </button>
        </form>
      </div>
    );
  }
}
