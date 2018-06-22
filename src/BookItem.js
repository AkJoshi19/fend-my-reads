import React from 'react'

import MoveShelfButton from './MoveShelfButton'

function BookItem(props) {
	const { book } = props;

	return (
		<article 
			className="book-item">
			<h3>{book.title}</h3>
			<p>{book.authors}</p>

			{console.log(book)}

			<div className="book-main-display">
				<img
					src={book.imageLinks.thumbnail}
					alt={book.title}
				/>
				<div className="book-interaction">
					<MoveShelfButton shelfName="Reading" />
					<MoveShelfButton shelfName="Want to" />
					<MoveShelfButton shelfName="Read" />
					<MoveShelfButton shelfName="None" />
				</div>
			</div>
		</article>
	);
}

export default BookItem