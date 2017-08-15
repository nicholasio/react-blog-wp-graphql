import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { graphql, gql } from 'react-apollo';
import './App.css';
import Post from "./components/Post";

class App extends Component {
	constructor(props){
		super(props);
		this.client = this.props.client;

		this.state = {
			blogname: 'React and GraphQL',
			pages: [
				{ title: 'About', slug: 'about'},
			],
			posts: [
				{
					title: 'Placeholder Post',
					author: 'Nícholas André',
					date: '11/08/2017',
					excerpt: '<p>Test Content</p>'
				}
			],
			categories: [
				{
					name: 'Test',
					slug: 'test'
				}
			]
		};
	}
	componentWillMount() {
		this.client.query({
			query: gql`
				{
				    pages{
				        edges{
				            node{
				                id
				                title
				                slug
				            }
				        }
				    }
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
			  `}
		).then( response => {
			this.populateNav(response.data.pages);
			this.populatePosts(response.data.posts);
			this.populateCategories(response.data.categories)
		} )
	}
	populateNav( pages ) {
		this.setState( { pages: pages.edges.map(page => page.node) } );
	}
	populatePosts( posts ) {
		this.setState( { posts: posts.edges.map(post => {
			return {
				...post.node,
				author: post.node.author.name
			};
		}) } );
	}
	populateCategories( categories ) {
		this.setState( { categories: categories.edges.map(category => category.node) } );
	}
	render() {
		return (
			<div className="app">
				<Navigation blogname={this.state.blogname} pages={this.state.pages} />
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{this.state.posts.map( (post,index) => (<Post key={index} {...post} />) ) }
						</div>
						<Sidebar categories={this.state.categories} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
