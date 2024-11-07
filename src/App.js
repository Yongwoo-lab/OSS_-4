import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Introduce from './Introduce.js';
import Ending from './Ending.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <Introduce />
        <Ending />
        
        <p>
          Edit <code>src/App.js</code> and dddsave to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
