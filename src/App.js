import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './Header'
import FooterNav from './FooterNav'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

import * as BooksAPI from './BooksAPI'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedBooks: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ displayedBooks: books })
    })
  }

  render () {
    return (
      <div className="full-app">
        <Header />
        
        <Route exact path="/" component={MainPage} />
        <Route path="/search" component={SearchPage} />

        <FooterNav />
      </div>
    );
  }
}

export default App;
