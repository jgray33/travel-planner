import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, 
  createHttpLink, 
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers, 
      authorization: token? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="App">
     <h1>Hello</h1>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
