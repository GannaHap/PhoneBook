import { screen, render } from '@testing-library/react';
const { default: AddContact } = require('../components/AddContact/AddContact');

test('Form Add Contact - Image Profile', () => {
  render(<AddContact />);

  // Img
  const imgProfil = document.querySelector('.img-profil-add-contact img');
  expect(imgProfil).toBeInTheDocument();

  // Button Change Img
  const btnImgProfil = document.querySelector('.img-profil-add-contact label');
  expect(btnImgProfil).toBeInTheDocument();

  // Input Img
  const inputImgProfii = document.getElementById('img');
  expect(inputImgProfii).toBeInTheDocument();
});

test('Form Add Contact - Label', () => {
  render(<AddContact />);

  const name = screen.getByLabelText('Name');
  expect(name).toBeInTheDocument();

  const phone = screen.getByLabelText('Phone');
  expect(phone).toBeInTheDocument();

  const job = screen.getByLabelText('Job');
  expect(job).toBeInTheDocument();

  const company = screen.getByLabelText('Company');
  expect(company).toBeInTheDocument();

  const email = screen.getByLabelText('Email');
  expect(email).toBeInTheDocument();
});

test('Form Add Contact - Input', () => {
  render(<AddContact />);

  const name = document.getElementById('name');
  expect(name).toBeInTheDocument();

  const phone = document.getElementById('phone');
  expect(phone).toBeInTheDocument();

  const job = document.getElementById('job');
  expect(job).toBeInTheDocument();

  const company = document.getElementById('company');
  expect(company).toBeInTheDocument();

  const email = document.getElementById('email');
  expect(email).toBeInTheDocument();
});

test('Button Submit', () => {
  render(<AddContact />);

  // Button
  const btnAdd = document.querySelector('.btn-add');
  expect(btnAdd).toBeInTheDocument();

  // Text Button
  const textBtn = screen.getByText(/Add/i);
  expect(textBtn).toBeInTheDocument();
});
