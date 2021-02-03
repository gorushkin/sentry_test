import logo from './logo.svg';
import './App.css';

const clickHandler = () => {
  console.log('click');
  throw new Error('Alarm!!!');
};

const methodDoesNotExist = () => {
  throw new Error('Alarm!!!');
};

function App() {
  // return (
  //   <div className="App">
  //     <button onClick={clickHandler} >Click</button>
  //   </div>
  // );
  return <button onClick={methodDoesNotExist}>Break the world</button>;
}

export default App;
