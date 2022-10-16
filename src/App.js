import logo from './logo.svg';
import './App.css';
require('nw.gui').Window.get().showDevTools();

chrome.serial.getDevices(function(ports) {
  for (let port of ports) {
      if (port.vendorId) {
          console.log(port);
      }
  }
});

function App() {
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
}

export default App;
