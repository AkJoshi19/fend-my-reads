import React from 'react'
import PropTypes from 'prop-types'

function MoveShelfButton(props) {
	const { shelfName, currentShelf, shelf } = props;
	const className = (currentShelf === shelf) ? ' active' : '';

	return (
		<button className={`move-shelf-button${className}`}>
			{shelfName}
		</button>
	);
}

MoveShelfButton.propTypes = {
	shelfName: PropTypes.oneOf([
		'Reading',
		'Want to',
		'Read',
		'None'
	]).isRequired,
	currentShelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read',
		undefined
	]),
	shelf: PropTypes.oneOf([
		'currentlyReading',
		'wantToRead',
		'read',
		undefined
	])
}

export default MoveShelfButton