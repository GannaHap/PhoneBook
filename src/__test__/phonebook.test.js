import { render, getByText, fireEvent } from '@testing-library/react';
import CardContact from '../components/CardContact/CardContact';
import EmptyContact from '../components/EmptyContact/EmptyContact';
import Spinner from '../components/Spinner/Spinner';

const data = {
  company: '',
  email: '',
  id: 262,
  image: '',
  job: '',
  name: 'aa',
  phone: '121212',
};

var favorites = [255, 262];

test('Card Contact', () => {
  render(<CardContact bar={data} favorites={favorites} />);

  // Check Div.bar
  const card = document.querySelector('.bar');
  expect(card).toBeInTheDocument();

  // Check Div.section-left
  const sectionLeft = document.querySelector('.section-left');
  expect(sectionLeft).toBeInTheDocument();

  // Check img
  const img = document.querySelector('.img-profil-bar');
  expect(img).toBeInTheDocument();

  // Check div.text
  const partText = document.querySelector('.text');
  expect(partText).toBeInTheDocument();

  // Check Nama Kontak
  const name = document.querySelector('span');
  expect(name).toBeInTheDocument();

  // Check Nomor Kontak
  const number = document.querySelector('.number-phone');
  expect(number).toBeInTheDocument();

  // Check div.section-right
  const sectionRight = document.querySelector('.section-right');
  expect(sectionRight).toBeInTheDocument();

  // Check Button Favorite
  const btnFavorite = document.querySelectorAll('.section-right i')[0];
  expect(btnFavorite).toBeInTheDocument();

  // Check Button Delete
  const btnTrash = document.querySelector('.fas.fa-trash-alt');
  expect(btnTrash).toBeInTheDocument();
});

test('Loader', () => {
  render(<Spinner />);

  const loader = document.querySelector('.loader');
  expect(loader).toBeInTheDocument();

  const imgLoader = document.querySelector('img');
  expect(imgLoader).toBeInTheDocument();

  const GIFLoader = document.querySelector('img').src === 'http://localhost/loading.gif';
  expect(GIFLoader).toBeTruthy();
});

test('Empty Contact', () => {
  render(<EmptyContact />);

  const divEmpty = document.querySelector('.empty');
  expect(divEmpty).toBeInTheDocument();

  const iconEmpty = document.querySelector('i.far.fa-address-book');
  expect(iconEmpty).toBeInTheDocument();

  const textEmptyContact = document.querySelector('.empty span');
  getByText(textEmptyContact, 'Kontak masih kosong');
});

test('Bla Bla', () => {
  <CardContact bar={data} favorites={favorites} />;

  const btnFavorite = document.querySelectorAll('.section-right i')[0];
});
