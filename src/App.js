import './App.css';
import selfie from './components/image/selfie.JPG';
import Main from './components/main/main.js';


function App() {
  return (
    <div className="App">
      <img className="selfieDimensions" src={selfie} alt="Picture of myself" />
      <Main />
    </div>
  );
}

export default App;
