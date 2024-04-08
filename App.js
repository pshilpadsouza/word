import './App.css';
import { Counter } from './Component/Counter'; // Named import
import { Navigation } from './Component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Counter/>
    </div>
  );
}

export default App;
