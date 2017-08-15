import React from 'react';

const Navigation = ( {blogname = 'Blog', pages = [] } ) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">{blogname}</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					{ pages.map((page,index) => (
						<li key={index} className="nav-item active">
							<a className="nav-link" href="#">{page.title}</a>
						</li>
					) ) }

				</ul>
			</div>
		</nav>
	);
};

export default Navigation;