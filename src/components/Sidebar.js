import React from 'react';
import Categories from './Categories';

const Sidebar = ( {categories = []}) => {
	return (
		<div className="col-md-4">
			<Categories categories={categories} />
		</div>
	);
};

export default Sidebar;