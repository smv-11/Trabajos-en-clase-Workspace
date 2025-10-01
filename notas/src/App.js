import logo from './logo.svg';
import './App.css';
import Estudiante from './Estudiante';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    { nombre: "Antonieta", apellido: "Perez" },
    { nombre: "Alexis", apellido: "Aguirre" },
    { nombre: "Ana", apellido: "Gómez" },
    { nombre: "Manuela", apellido: "Rendón" },
    { nombre: "Miguel", apellido: "Villa" },
    { nombre: "Sarai", apellido: "Munera" },
    { nombre: "Daniela", apellido: "Torres" },
    { nombre: "Thomas", apellido: "Usuga" }
  ];
  return (
    <div className='App'>
      <Lista listaestudiantes={estudiantes} />
      <Footer />
    </div>
  );

}

export default App;
