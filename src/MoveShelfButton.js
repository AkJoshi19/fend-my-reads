import React from 'react'
import PropTypes from 'prop-types'

function MoveShelfButton(props) {
	return (
		<button className="move-shelf-button">
			{props.shelfName}
		</button>
	);
}

MoveShelfButton.propTypes = {
	shelfName: PropTypes.oneOf([
		'Reading',
		'Want to',
		'Read',
		'None'
	]),
}

export default MoveShelfButton