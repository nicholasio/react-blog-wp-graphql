import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ( {blogname = 'Blog', pages = [] } ) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<Link className="navbar-brand" to="/">{blogname}</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					{ pages.map((page,index) => (
						<li key={index} className="nav-item active">
							<Link className="nav-link" to={'/post/' + page.id}>{page.title}</Link>
						</li>
					) ) }

				</ul>
			</div>
		</nav>
	);
};

export default Navigation;