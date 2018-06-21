import React from 'react'

function MoveShelfButton(props) {
	return (
		<button className="move-shelf-button">
			{props.shelfName}
		</button>
	);
}

export default MoveShelfButton