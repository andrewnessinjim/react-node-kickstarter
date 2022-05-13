import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {HomePage} from './App';
import reportWebVitals from './reportWebVitals';
import AppApolloProvider from "./infra/AppApolloProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppApolloProvider>
      <HomePage />
    </AppApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
