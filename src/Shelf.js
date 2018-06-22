import React from 'react'

import BookItem from './BookItem'

function Shelf(props) {
	const { books, shelf } = props;

	return (
		<section className="shelf">
			<header className="shelf-header">
				<h2>{props.title}</h2>
			</header>

			<ul className="book-items-container">
				{books
					.filter((book) => book.shelf === shelf)
					.map((book) => (
						<li key={book.id}>
							<BookItem book={book} />
						</li>
				))}
			</ul>
		</section>
	);
}

export default Shelf