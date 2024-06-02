import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent';
import GreetingComponent from './components/GreetingComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingComponent/>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
