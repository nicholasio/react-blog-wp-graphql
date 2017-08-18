import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import { graphql, gql } from 'react-apollo';
import '../App.css';
import Post from "../components/Post";

class Single extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if ( this.props.singleQuery && this.props.singleQuery.loading ) {
			return <div>Loading Single</div>;
		}
		if (this.props.singleQuery && this.props.singleQuery.error) {
			return <div>Error</div>
		}
		const pages = this.props.singleQuery.pages.edges.map(page => page.node);
		const post = {
				...this.props.singleQuery.post,
				author: this.props.singleQuery.post.author.name
			};
		return (
			<div className="app">
				<Navigation blogname="React and WPGraphQL" pages={pages} />
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Post {...post} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const SINGLE_QUERY = gql`
query getPost( $id: ID! ) {
    pages{
        edges{
            node{
                id
                title
                slug
            }
        }
    }
    post( id: $id ){
        id
        title
        content
        excerpt
        author{
            name
        }
    }
}
`;
export default graphql(SINGLE_QUERY, {
	name: 'singleQuery',
	options: (props) => ({variables: { id : props.match.params.id } })
}) (Single);
