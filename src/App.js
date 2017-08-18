import React, {Component} from 'react';
import './App.css';
import Homepage from "./Pages/Homepage";
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<Route exact path="/" component={Homepage} />
			</HashRouter>

		);
	}
}

export default App;
