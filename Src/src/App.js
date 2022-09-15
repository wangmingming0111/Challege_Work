import logo from './logo.svg';
import './App.css';

import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import PersonList from './components/PersonList';
import PersonTitle from './components/PersonTitle';
import PersonContent from './components/PersonContent';
function App() {
  return (
    <div className='App'>
      <PersonTitle/>
      <PersonContent/>
    </div>
  )
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  */
}

export default App;
