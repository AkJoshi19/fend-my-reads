import React from 'react'

import Shelf from './Shelf'

function MainPage(props) {
	return (
		<div className="main-page">
			<Shelf title="Currently Reading" />
	        <Shelf title="Want to Read" />
	        <Shelf title="Read" />
		</div>
	);
}

export default MainPage