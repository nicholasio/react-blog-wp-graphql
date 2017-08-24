import React, {Component} from 'react';
import './App.css';
import Homepage from "./Pages/Homepage";
import Single from "./Pages/Single";

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Homepage} />
					<Route path="/post/:id" component={Single} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
