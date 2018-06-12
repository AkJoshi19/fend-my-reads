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
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
