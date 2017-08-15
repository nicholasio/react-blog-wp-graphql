import React from 'react';

const Post = ( {title, content, date, author = ''} ) => {
	return (
		<article>
			<h1 className="mt-4">{title}</h1>
			<p className="lead">
				by <a href="#">{author}</a>
			</p>
			<hr/>
			<p>{date}</p>
			<div dangerouslySetInnerHTML={ {__html: content} } />
		</article>
	);
};

export default Post;