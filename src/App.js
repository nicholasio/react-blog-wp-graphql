import React, {Component} from 'react';
import './App.css';
import Homepage from "./Pages/Homepage";
import Single from "./Pages/Single";

import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<div class="App">
					<Route exact path="/" component={Homepage} />
					<Route path="/post/:id" component={Single} />
				</div>
			</HashRouter>
		);
	}
}

export default App;
