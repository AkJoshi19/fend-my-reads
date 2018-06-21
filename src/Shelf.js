import React from 'react'

import BookItem from './BookItem'

function Shelf(props) {
	return (
		<section className="shelf">
			<header className="shelf-header">
				<h2>{props.title}</h2>
			</header>

			<div className="book-items-container">
				<BookItem />
				<BookItem />
			</div>
		</section>
	);
}

export default Shelf