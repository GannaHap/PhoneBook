import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// import './App.css';
// import { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact>
//           <Navbar />
//           <Home />
//         </Route>
//         <Route path="/favorites" exact>
//           <Navbar />
//           <Favorites />
//         </Route>
//         <Route path="/add-contact" exact>
//           <Navbar />
//           <AddContact />
//         </Route>
//         <Route path="/phone-book" exact>
//           <Navbar />
//           <PhoneBook />
//         </Route>
//         <Route path="/register">
//           <Navbar />
//           <Register />
//         </Route>
//         <Route path="/login">
//           <Navbar />
//           <Login />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
