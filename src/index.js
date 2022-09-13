import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';

// Redux Imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bananaReducer from './reducers/bananaReducer';

// Apollo Imports
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Apollo
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    // Token needs to start with "REACT_APP_" so React will be able to read it.
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const store = configureStore({
  reducer: {
    bananaReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);