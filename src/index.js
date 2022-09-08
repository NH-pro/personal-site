import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';

// Redux Imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import projectsSlice from './redux/reducers/projectsSlice';
import bananaReducer from './redux/reducers/bananaReducer';

// Apollo Imports
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Sagas Imports
import projectsSaga from './redux/sagas/projectsSaga';


// Apollo
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    // Token needs to start with "REACT_APP_" so React will be able to read it.
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    bananaReducer,
    projects: projectsSlice
  },
  middleware: [saga]
})

saga.run(projectsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);