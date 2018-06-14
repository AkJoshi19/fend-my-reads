import React, { Component } from 'react'
import Books from './Books'

class SearchBook extends Component {
	state = {
		query: ''
	}

	updateQuery(query) {
		this.setState({
			query: query.trim()
		})
	}

	render() {
		return (
			<div classname='search-field'>
				{JSON.stringify(this.state)}
				<input 
					className='search-input'
					type='text'
					placeholder='Search Books...'
					value={this.state.query}
					onChange={event => this.updateQuery(event.target.value)}
				/>
			</div>
		)
	}
}

export default SearchBook