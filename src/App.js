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
      displayedBooks: [],
      searchedBooks: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ displayedBooks: books })
    })
  }

  updateSearchedBooks = (query) => {
    BooksAPI.search(query).then((books) => {
      this.setState({searchedBooks: books})
    })
  }

  render () {
    const { displayedBooks, searchedBooks } = this.state;

    return (
      <div className="full-app">
        <Header />
        
        <Route 
          exact path="/" 
          render={() => (
            <MainPage books={displayedBooks} />
          )}
        />
        <Route 
          path="/search" 
          render={() => (
            <SearchPage 
              books={searchedBooks}
              updateSearchedBooks={this.updateSearchedBooks}
            />
          )}
        />

        <FooterNav />
      </div>
    );
  }
}

export default App;
