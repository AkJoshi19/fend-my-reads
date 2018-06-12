import React, { Component } from 'react'

class Books extends Component {
	render() {
		return <ol>
			{this.props.books.map((book) => (
				<li key={book.id}>
					{book.title}
				</li>
			))}
		</ol>
	}
}

export default Books