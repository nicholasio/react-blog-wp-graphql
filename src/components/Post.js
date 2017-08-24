import React from 'react';
import TextTruncate from 'react-text-truncate';
import {Link} from "react-router-dom";

const Post = ( {id, title, content, date, author = '', single = false } ) => {
	return (
		<article>
			<h1 className="mt-4">
				{ !single && <Link to={'/post/' + id}>{title}</Link>}
				{ single && title}
				</h1>
			<p className="lead">
				by <a href="#">{author}</a>
			</p>
			<hr/>
			<p>{date}</p>
			{ !single &&
				<TextTruncate
					line={3}
					truncateText="…"
					text={content.replace(/(<([^>]+)>)/ig,'')}
					textTruncateChild={<Link to={'/post/' + id}>Read More</Link>}
				/>
			}
			{ single &&
				<div dangerouslySetInnerHTML={ {__html: content} } />
			}
		</article>
	);
};

export default Post;