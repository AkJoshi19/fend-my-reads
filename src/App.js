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
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchedBooks: [] })
        } else {
          this.setState({ searchedBooks: books })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ displayedBooks: books })
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
            <MainPage 
              books={displayedBooks}
              changeShelf={this.changeShelf}
            />
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
