import React from 'react';
import './Lista.css';

function Lista({ listaestudiantes }) {
  return (
    <div className="lista-container">
      <h2>Lista de Estudiantes</h2>
      <ul>
        {listaestudiantes.map((est, index) => (
          <li key={index}>
            {est.nombre} {est.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
