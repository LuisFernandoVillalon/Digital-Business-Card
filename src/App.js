import './App.css';
import selfie from './components/image/selfie.JPG';
import Main from './components/main/main.js';


function App() {
  return (
    <div className="App">
      <img className="selfieDimensions" src={selfie} alt="A selfie." />
      <Main />
    </div>
  );
}

export default App;
