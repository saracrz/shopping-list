import logo from './logo.svg';
import './App.css';
import { TextBox } from './components/common/TextBox'


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TextBox />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
