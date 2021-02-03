import './App.css';


const methodDoesNotExist = () => {
  throw new Error('Alarm!!!');
};

function App() {
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}

export default App;
