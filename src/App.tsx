import logo from './logo.svg';
import './App.css';

enum Effect {
  Landscaper,
  Surveyor,
  Real_Estate_Agent,
  Pool_Manufacturer,
  Temp_Agency,
  Bis,
}

const deck = [
  {"number": 7, "effect": Effect.Real_Estate_Agent},
  {"number": 10, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Temp_Agency},
  {"number": 5, "effect": Effect.Surveyor},
  {"number": 1, "effect": Effect.Surveyor},
  {"number": 12, "effect": Effect.Landscaper},
  {"number": 13, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Surveyor},
  {"number": 1, "effect": Effect.Real_Estate_Agent},
  {"number": 9, "effect": Effect.Surveyor},
  {"number": 5, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Landscaper},
  {"number": 3, "effect": Effect.Bis},
  {"number": 7, "effect": Effect.Surveyor},
  {"number": 11, "effect": Effect.Landscaper},
  {"number": 2, "effect": Effect.Landscaper},
  {"number": 8, "effect": Effect.Temp_Agency},
  {"number": 5, "effect": Effect.Real_Estate_Agent},
  {"number": 5, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Temp_Agency},
  {"number": 13, "effect": Effect.Pool_Manufacturer},
  {"number": 7, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Surveyor},
  {"number": 7, "effect": Effect.Landscaper},
  {"number": 11, "effect": Effect.Surveyor},
  {"number": 9, "effect": Effect.Temp_Agency},
  {"number": 4, "effect": Effect.Real_Estate_Agent},
  {"number": 4, "effect": Effect.Bis},
  {"number": 6, "effect": Effect.Bis},
  {"number": 13, "effect": Effect.Bis},
  {"number": 4, "effect": Effect.Landscaper},
  {"number": 8, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Landscaper},
  {"number": 9, "effect": Effect.Bis},
  {"number": 6, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Pool_Manufacturer},
  {"number": 9, "effect": Effect.Real_Estate_Agent},
  {"number": 2, "effect": Effect.Real_Estate_Agent},
  {"number": 15, "effect": Effect.Real_Estate_Agent},
  {"number": 7, "effect": Effect.Landscaper},
  {"number": 3, "effect": Effect.Surveyor},
  {"number": 8, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Bis},
  {"number": 11, "effect": Effect.Landscaper},
  {"number": 6, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Surveyor},
  {"number": 8, "effect": Effect.Bis},
  {"number": 15, "effect": Effect.Landscaper},
  {"number": 7, "effect": Effect.Bis},
  {"number": 10, "effect": Effect.Surveyor},
  {"number": 4, "effect": Effect.Pool_Manufacturer},
  {"number": 15, "effect": Effect.Surveyor},
  {"number": 10, "effect": Effect.Landscaper},
  {"number": 5, "effect": Effect.Real_Estate_Agent},
  {"number": 7, "effect": Effect.Real_Estate_Agent},
  {"number": 2, "effect": Effect.Surveyor},
  {"number": 7, "effect": Effect.Temp_Agency},
  {"number": 9, "effect": Effect.Real_Estate_Agent},
  {"number": 1, "effect": Effect.Landscaper},
  {"number": 12, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Landscaper},
  {"number": 13, "effect": Effect.Surveyor},
  {"number": 9, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Surveyor},
  {"number": 3, "effect": Effect.Pool_Manufacturer},
  {"number": 11, "effect": Effect.Real_Estate_Agent},
  {"number": 8, "effect": Effect.Pool_Manufacturer},
  {"number": 6, "effect": Effect.Pool_Manufacturer},
  {"number": 11, "effect": Effect.Real_Estate_Agent},
  {"number": 3, "effect": Effect.Temp_Agency},
  {"number": 4, "effect": Effect.Temp_Agency},
  {"number": 8, "effect": Effect.Real_Estate_Agent},
  {"number": 11, "effect": Effect.Surveyor},
  {"number": 5, "effect": Effect.Landscaper},
  {"number": 14, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Real_Estate_Agent},
  {"number": 8, "effect": Effect.Real_Estate_Agent},
  {"number": 12, "effect": Effect.Bis},
  {"number": 10, "effect": Effect.Real_Estate_Agent},
  {"number": 10, "effect": Effect.Surveyor},
]

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
