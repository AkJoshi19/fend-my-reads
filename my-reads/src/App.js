import React, { Component } from 'react';

class BookList extends React.Component {
  render() {
    const books = this.props.items;

    return <ol>
      {books.map(book => (
        <li key={book.title}>{book.title}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList items={[
          { title: 'book1' },
          { title: 'book2' },
          { title: 'book3' }
        ]}/>
      </div>
    );
  }
}

export default App;
