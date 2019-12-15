import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import App from './containers/App';
import GlobalStyles from './styles';

const client = new ApolloClient({ uri: 'https://api.spacex.land/graphql' });

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
