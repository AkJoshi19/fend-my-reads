import React, { Component } from 'react'
import Books from './Books'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  moveContact(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        <Books 
          books={this.state.books} 
          shelf='currentlyReading' 
          title='Currently Reading'
          onMoveBook={this.moveContact}
        />
        <Books 
          books={this.state.books} 
          shelf='wantToRead' 
          title='Want To Read'
          onMoveBook={this.moveContact}
        />
        <Books 
          books={this.state.books} 
          shelf='read' 
          title='Read'
          onMoveBook={this.moveContact}
        />
      </div>
    );
  }
}

export default App;
