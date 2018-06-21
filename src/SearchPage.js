import React from 'react'

import SearchInput from './SearchInput'
import BookItem from './BookItem'

function SearchPage(props) {
	return (
		<div className="search-page">
			<SearchInput />

			<div className="search-books-container">
				<BookItem />
				<BookItem />
				<BookItem />
			</div>
		</div>
	);
}

export default SearchPage