import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <FooterNav />
      </div>
    );
  }
}

export default App;
