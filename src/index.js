import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import projectsSlice from './redux/reducers/projectsSlice';
import projectsSaga from './redux/sagas/projectsSaga';
import { configureStore } from '@reduxjs/toolkit';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    projects: projectsSlice
  },
  middleware: [saga]
})

saga.run(projectsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);