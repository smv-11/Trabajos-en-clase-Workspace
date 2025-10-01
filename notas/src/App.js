import './App.css';
import Lista from './Lista';
import Footer from './Footer';
import Header from './Header';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item3 from './Item3';


function App() {
  let estudiantes = [
    { nombre: "Sarai", apellido: "Munera" },
    { nombre: "Alexis", apellido: "Aguirre" },
    { nombre: "Antonieta", apellido: "Perez" },
    { nombre: "Ana", apellido: "Gómez" },
    { nombre: "Manuela", apellido: "Rendón" },
    { nombre: "Miguel", apellido: "Villa" },
    { nombre: "Daniela", apellido: "Torres" },
    { nombre: "Thomas", apellido: "Usuga" }
  ];
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/estudiantes'
            element={<Lista Lista listaestudiantes={estudiantes} />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
