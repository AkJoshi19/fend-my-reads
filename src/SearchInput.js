import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
		};
	}

	updateQuery = (query) => {
		this.setState({ searchQuery: query })
	}

	render () {
		const { searchQuery } = this.state;

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
						value={searchQuery}
						onChange={(event) => 
							this.updateQuery(event.target.value)
						}
					/>
					<button className="validate-form">OK</button>
				</form>
				{JSON.stringify(this.state)}
			</div>
		);
	};
}

export default SearchInput