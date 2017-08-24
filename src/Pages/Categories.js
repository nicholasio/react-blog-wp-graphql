import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import C from '../constants';
import { graphql, gql } from 'react-apollo';
import '../App.css';
import Post from "../components/Post";


class Category extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if ( this.props.categoryuery && this.props.categoryuery.loading ) {
			return <ReactLoading type="bars" color="#444"/>;
		}
		if (this.props.categoryuery && this.props.categoryuery.error) {
			return <div>Error</div>
		}
		const pages = this.props.categoryuery.pages.edges.map(page => page.node);
		const categories = this.props.categoryuery.categories.edges.map(category => category.node);
		const posts = this.props.categoryuery.posts.edges.map(post => {
			return {
				...post.node,
				author: post.node.author.name
			};
		});
		return (
			<div className="app">
				<Navigation pages={pages} />
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{posts.map( (post,index) => (<Post key={index} {...post} />) ) }
						</div>
						<Sidebar categories={categories} />
					</div>
				</div>
			</div>
		);
	}
}
const CATEGORY_QUERY = gql`
query {
    ${C.GET_PAGES_MENU_QUERY}
    categories{
        edges{
            node{
                id
                name
                slug
            }
        }
    }
}
`;
export default graphql(CATEGORY_QUERY, { name: 'categoryuery' }) (Category);
