import './App.css';
import selfie from './components/image/selfie.JPG';
import Main from './components/main/main.js';


function App() {
  return (
    <div className="App">
      <div className="card-container">
        <img src={selfie} alt="A selfie." />
        <Main />
      </div>
    </div>
  );
}

export default App;
