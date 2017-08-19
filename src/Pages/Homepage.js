import React, {Component} from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import C from '../constants';
import { graphql, gql } from 'react-apollo';
import '../App.css';
import Post from "../components/Post";
import ReactLoading from 'react-loading';
class Homepage extends Component {
	constructor(props){
		super(props);
	}
	render() {
		if ( this.props.homepageQuery && this.props.homepageQuery.loading ) {
			return <ReactLoading type="bars" delay="0" className="loading" color="#444"/>;
		}
		if (this.props.homepageQuery && this.props.homepageQuery.error) {
			return <div>Error</div>
		}
		const pages = this.props.homepageQuery.pages.edges.map(page => page.node);
		const categories = this.props.homepageQuery.categories.edges.map(category => category.node);
		const posts = this.props.homepageQuery.posts.edges.map(post => {
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
const HOMEPAGE_QUERY = gql`
query {
    ${C.GET_PAGES_MENU_QUERY}
    posts{
        edges{
            node{
                id
                title
                content
                excerpt
                author{
                    name
                }
            }
        }
    }
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
export default graphql(HOMEPAGE_QUERY, { name: 'homepageQuery' }) (Homepage);
