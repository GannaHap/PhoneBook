import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
const { default: AlertNotice } = require('../components/AlertNotice/AlertNotice');

test('Judul Halaman Login', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const titlePage = document.querySelector('.login h2');
  expect(titlePage).toBeInTheDocument();
});

test('Alert Failed', () => {
  render(<AlertNotice notice={false} />);

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
  render(<AlertNotice notice={true} />);

  const notice = document.querySelector('.notice');
  expect(notice).toBeInTheDocument();

  const textAlert = document.querySelector('p');
  expect(textAlert).toBeInTheDocument();

  const btnClose = document.querySelector('.close');
  expect(btnClose).toBeInTheDocument();

  const iconBtnClose = document.querySelector('.fal.fa-times');
  expect(iconBtnClose).toBeInTheDocument();
});

test('Form Login - Label', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const email = screen.getByLabelText('Email');
  expect(email).toBeInTheDocument();

  const password = screen.getByLabelText('Password');
  expect(password).toBeInTheDocument();
});

test('Form Login - Input', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const email = document.getElementById('email');
  expect(email).toBeInTheDocument();

  const password = document.getElementById('password');
  expect(password).toBeInTheDocument();
});

test('Button Login', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const btnLogin = document.querySelector('.btn-register');
  expect(btnLogin).toBeInTheDocument();
});
