import './App.css';
import * as Sentry from '@sentry/react';

const methodDoesNotExist = () => {
  throw new Error('Alarm!!!');
};

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

const Btn = () => <button onClick={methodDoesNotExist}>Break the world</button>;

const App = () => (
  <Sentry.ErrorBoundary fallback={myFallback} showDialog onError={() => console.log('error')}>
    <Btn />
  </Sentry.ErrorBoundary>
);

export default App;
