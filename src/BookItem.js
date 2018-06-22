import React from 'react'
import PropTypes from 'prop-types'

import MoveShelfButton from './MoveShelfButton'

function BookItem(props) {
	const { book } = props;

	return (
		<article 
			className="book-item">
			<h3>{book.title}</h3>
			<p>{book.authors}</p>

			<div className="book-main-display">
				<img
					src={'https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
					alt={book.title}
				/>
				<div className="book-interaction">
					<MoveShelfButton 
						shelfName="Reading"
						currentShelf={book.shelf}
						shelf="currentlyReading"
					/>
					<MoveShelfButton 
						shelfName="Want to"
						currentShelf={book.shelf}
						shelf="wantToRead"
					/>
					<MoveShelfButton 
						shelfName="Read"
						currentShelf={book.shelf}
						shelf="read"
					/>
					<MoveShelfButton 
						shelfName="None"
						currentShelf={book.shelf}
						shelf={undefined}
					/>
				</div>
			</div>
		</article>
	);
}

BookItem.propTypes = {
	book: PropTypes.object.isRequired
}

export default BookItem