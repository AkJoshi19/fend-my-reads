import React, { Component } from 'react'
import Books from './Books'
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

  render() {
    return (
      <div>
        <Books 
          books={this.state.books} 
          shelf='currentlyReading' 
          title='Currently Reading'
        />
        <Books 
          books={this.state.books} 
          shelf='wantToRead' 
          title='Want To Read'
        />
        <Books 
          books={this.state.books} 
          shelf='read' 
          title='Read'
        />
      </div>
    );
  }
}

export default App;
