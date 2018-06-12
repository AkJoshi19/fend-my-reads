import React, { Component } from 'react'
import Books from './Books'

const books = [
  {
    id: 'book1',
    title: 'Title 1',
    author: 'Author 1',
    shelf: 'currently reading',
    cover: 'img/book1.jpg'
  },
  {
    id: 'book2',
    title: 'Title 2',
    author: 'Author 2',
    shelf: 'currently reading',
    cover: 'img/book2.jpg'
  },
  {
    id: 'book3',
    title: 'Title 3',
    author: 'Author 3',
    shelf: 'currently reading',
    cover: 'img/book3.jpg'
  },
  {
    id: 'book4',
    title: 'Title 4',
    author: 'Author 4',
    shelf: 'wants to read',
    cover: 'img/book4.jpg'
  },
  {
    id: 'book5',
    title: 'Title 5',
    author: 'Author 5',
    shelf: 'wants to read',
    cover: 'img/book5.jpg'
  },
  {
    id: 'book6',
    title: 'Title 6',
    author: 'Author 6',
    shelf: 'wants to read',
    cover: 'img/book6.jpg'
  },
  {
    id: 'book7',
    title: 'Title 7',
    author: 'Author 7',
    shelf: 'read',
    cover: 'img/book7.jpg'
  },
  {
    id: 'book8',
    title: 'Title 8',
    author: 'Author 8',
    shelf: 'read',
    cover: 'img/book8.jpg'
  },
  {
    id: 'book9',
    title: 'Title 9',
    author: 'Author 9',
    shelf: 'read',
    cover: 'img/book9.jpg'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Books books={books} />
      </div>
    );
  }
}

export default App;
