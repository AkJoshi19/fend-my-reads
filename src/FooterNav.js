import React from 'react'
import { Link } from 'react-router-dom'

function FooterNav(props) {
	return (
		<footer className="footer-nav">
			<nav>
				<Link
					to="/"
					className="nav-link"
				>Home</Link>

				<Link
					to="/search"
					className="nav-link"
				>Search</Link>
			</nav>
		</footer>
	);
}

export default FooterNav