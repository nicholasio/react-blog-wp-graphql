import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const networkInterface = createNetworkInterface( {
	uri: 'http://local.wordpress.dev/graphql'
} );
const client = new ApolloClient({
	networkInterface
});
ReactDOM.render(
	<ApolloProvider client={client}>
		<App client={client} />
	</ApolloProvider>,
	document.getElementById('root')
);
registerServiceWorker();
