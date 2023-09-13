import './App.css';
import MiCalendario from './Components/MiCalendario';

const actualYear = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <MiCalendario actualYear = {actualYear}></MiCalendario>
    </div>
  );
}

export default App;