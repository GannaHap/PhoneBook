import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AlertNotice from '../components/AlertNotice/AlertNotice';
const { default: Register } = require('../components/Register/Register');

test('Judul Halaman Daftar', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const titleDaftar = document.querySelector('.register h2');
  expect(titleDaftar).toBeInTheDocument();
});

test('Alert Failed', () => {
  render(
    <BrowserRouter>
      <AlertNotice notice={false} />
    </BrowserRouter>
  );

  const notice = document.querySelector('.notice');
  expect(notice).toBeInTheDocument();

  const textAlert = document.querySelector('p');
  expect(textAlert).toBeInTheDocument();

  const btnClose = document.querySelector('.close');
  expect(btnClose).toBeInTheDocument();

  const iconBtnClose = document.querySelector('.fal.fa-times');
  expect(iconBtnClose).toBeInTheDocument();
});

test('Alert Success', () => {
  render(
    <BrowserRouter>
      <AlertNotice notice={true} />
    </BrowserRouter>
  );

  const notice = document.querySelector('.notice');
  expect(notice).toBeInTheDocument();

  const textAlert = document.querySelector('p');
  expect(textAlert).toBeInTheDocument();

  const btnClose = document.querySelector('.close');
  expect(btnClose).toBeInTheDocument();

  const iconBtnClose = document.querySelector('.fal.fa-times');
  expect(iconBtnClose).toBeInTheDocument();
});

test('Form Register - Label', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const name = screen.getByLabelText('Name');
  expect(name).toBeInTheDocument();

  const email = screen.getByLabelText('Email');
  expect(email).toBeInTheDocument();

  const password = screen.getByLabelText('Password');
  expect(password).toBeInTheDocument();
});

test('Form Register', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const name = document.getElementById('name');
  expect(name).toBeInTheDocument();

  const email = document.getElementById('email');
  expect(email).toBeInTheDocument();

  const password = document.getElementById('password');
  expect(password).toBeInTheDocument();
});

test('Button Register', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const buttonRegister = document.querySelector('.btn-register');
  expect(buttonRegister).toBeInTheDocument();
});
