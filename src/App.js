import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'
import MainPage from './MainPage'

import SearchInput from './SearchInput'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <SearchInput />
        <FooterNav />
      </div>
    );
  }
}

export default App;
