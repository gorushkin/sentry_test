import './App.css';
import * as Sentry from '@sentry/react';
import { useState } from 'react';
// import ErrorBoundary from './ErrorBoundary.jsx';

const Btn = () => {
  const [counter, setCounter] = useState(0);

  const methodDoesNotExist = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  if (counter === 3) {
    throw new Error('Counter!!!');
  }

  return <button onClick={methodDoesNotExist}>Break the world</button>;
};

const App = () => (
  <Sentry.ErrorBoundary fallback={<h1>Error</h1>} onError={() => console.log('asdfasdfasdf')}>
    <Btn />
  </Sentry.ErrorBoundary>
);

export default App;
