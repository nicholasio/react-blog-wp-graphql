import React from 'react';
import Categories from './Categories';

const Sidebar = ( {categories = []}) => {
	return (
		<div className="col-md-4">
			<div className="card my-4">
				<h5 className="card-header">Search</h5>
				<div className="card-body">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
					</div>
				</div>
			</div>

			<Categories categories={categories} />

			<div className="card my-4">
				<h5 className="card-header">Side Widget</h5>
				<div className="card-body">
					You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
				</div>
			</div>
		</div>
	);
};

export default Sidebar;