import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import App from './App';

Sentry.init({
  dsn: 'https://755bccd782164d09812c03648c0ef777@o515086.ingest.sentry.io/5621749',
});

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={myFallback}>
    <App />
  </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
