import React from 'react';

const Categories = ( {categories = []} ) => {
	return (
		<div className="card my-4">
			<h5 className="card-header">Categories</h5>
			<div className="card-body">
				<div className="row">
					<div className="col-lg-6">
						<ul className="list-unstyled mb-0">
							{categories.map( (category,index) => (
								<li><a href="#">{category.name}</a></li>
							) )}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;