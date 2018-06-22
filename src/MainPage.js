import React from 'react'

import Shelf from './Shelf'

function MainPage(props) {
	const { books } = props;

	return (
		<div className="main-page">
			<Shelf 
				title="Currently Reading" 
				books={books}
				shelf="currentlyReading"
			/>
	        <Shelf 
	        	title="Want to Read" 
	        	books={books}
	        	shelf="wantToRead"
	        />
	        <Shelf 
	        	title="Read" 
	        	books={books}
	        	shelf="read"
	        />
		</div>
	);
}

export default MainPage