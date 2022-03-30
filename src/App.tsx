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
];

const n1 = [
  {"requirements": [{"1": 6}], "first_points": 8, "other_points": 4},
  {"requirements": [{"4": 2}], "first_points": 6, "other_points": 3},
  {"requirements": [{"3": 3}], "first_points": 8, "other_points": 4},
  {"requirements": [{"5": 2}], "first_points": 8, "other_points": 4},
  {"requirements": [{"2": 4}], "first_points": 8, "other_points": 4},
  {"requirements": [{"6": 2}], "first_points": 10, "other_points": 6},
]

const n2 = [
  {"requirements": [{"1": 3}, {"6": 1}], "first_points": 11, "other_points": 6},
  {"requirements": [{"4": 1}, {"1": 3}], "first_points": 9, "other_points": 5},
  {"requirements": [{"3": 1}, {"6": 1}], "first_points": 8, "other_points": 4},
  {"requirements": [{"4": 1}, {"5": 1}], "first_points": 9, "other_points": 5},
  {"requirements": [{"3": 2}, {"4": 1}], "first_points": 12, "other_points": 7},
  {"requirements": [{"5": 1}, {"2": 2}], "first_points": 10, "other_points": 6},
]

const n3 = [
  {"requirements": [{"2": 1}, {"3": 1}, {"5": 1}], "first_points": 13, "other_points": 7},
  {"requirements": [{"1": 1}, {"2": 2}, {"3": 1}], "first_points": 11, "other_points": 6},
  {"requirements": [{"1": 1}, {"4": 1}, {"5": 1}], "first_points": 13, "other_points": 7},
  {"requirements": [{"3": 1}, {"4": 1}], "first_points": 7, "other_points": 3},
  {"requirements": [{"1": 1}, {"2": 1}, {"6": 1}], "first_points": 12, "other_points": 7},
  {"requirements": [{"2": 1}, {"5": 1}], "first_points": 7, "other_points": 3},
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
