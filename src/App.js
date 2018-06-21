import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'
import MainPage from './MainPage'

import SearchPage from './SearchPage'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <SearchPage />
        <FooterNav />
      </div>
    );
  }
}

export default App;
