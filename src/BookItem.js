import React from 'react'

import MoveShelfButton from './MoveShelfButton'

function BookItem(props) {
	return (
		<article className="book-item">
			<h3>Book Title</h3>
			<p>Book Author</p>

			<div className="book-main-display">
				<img
					src="https://images.pexels.com/photos/880478/pexels-photo-880478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt="Book Name"
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