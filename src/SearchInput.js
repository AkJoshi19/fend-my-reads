import React from 'react'
import { Link } from 'react-router-dom'

function SearchInput(props) {
	return (
		<div className="search-field">
			<Link
				to="/"
				className="back-btn"
			><i className="fas fa-arrow-left"></i></Link>
			<form>
				<input
					className="search-input"
					type="text"
					placeholder="Search Books..."
					defaultValue=""
				/>
				<button className="validate-form">OK</button>
			</form>
		</div>
	);
}

export default SearchInput