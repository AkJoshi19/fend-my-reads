import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'
import MainPage from './MainPage'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <MainPage />
        <FooterNav />
      </div>
    );
  }
}

export default App;
