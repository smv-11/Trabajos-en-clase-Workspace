import logo from './logo.svg';
import './App.css';
import Componente from './Componente.js';
import Estudiante from './Estudiante.js';

function App() {
  return (
    <div className="App">
      <Componente />
      <Estudiante nombre={'Alexis'} apellido={'Aguirre'}/>
      <Estudiante nombre={'Saray'} apellido={'Munera'}/>
    </div>
  );
}
export default App;
