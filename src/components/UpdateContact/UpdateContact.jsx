import axios from 'axios';
import React, { Component } from 'react';

import './UpdateContact.css';

export default class UpdateContact extends Component {
  state = {
    name: this.props.data.name,
    phone: this.props.data.phone,
    job: this.props.data.job,
    company: this.props.data.company,
    email: this.props.data.email,
    img: this.props.data.image,
    isSuccess: null,
    notice: null,
    previewImg: null,
  };

  goBack = () => {
    this.props.handleShowUpdate();
  };

  saveUpdateContact = (event) => {
    event.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.append('name', this.state.name);
    bodyFormData.append('phone', this.state.phone);
    bodyFormData.append('job', this.state.job);
    bodyFormData.append('company', this.state.company);
    bodyFormData.append('email', this.state.email);
    bodyFormData.append('image', this.state.img);

    const token = localStorage.token;
    const idContact = this.props.data.id;
    axios({
      method: 'put',
      url: `https://phone-book-api.herokuapp.com/api/v1/contacts/${idContact}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: bodyFormData,
    })
      .then((response) => {
        this.goBack();
      })
      .catch((err) => {
        console.log(err.response.data.data);
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
    });
  };

  handleChangePict = (e) => {
    const target = e.target;
    const file = target.files[0];
    const prevImg = URL.createObjectURL(file);
    console.log(prevImg);
    this.setState({
      img: file,
      previewImg: prevImg,
    });
  };

  render() {
    return (
      <div className="update-contact">
        <div className="header-update-contact">
          <i className="fal fa-arrow-circle-left" onClick={this.goBack}></i>
        </div>
        <div className="board-update-contact">
          <form className="form" onSubmit={this.saveUpdateContact}>
            <div className="img-contact">
              <img src={this.state.img ? this.state.img : '/logo512.png'} alt="IMG Profile" />
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
      </div>
    );
  }
}
