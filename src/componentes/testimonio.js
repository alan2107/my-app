import React from 'react';
import '../hojasDeEstilo/Testimonios.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}  /* adentro de llaves son valores de js, require para insertar imagen */
        alt='foto de emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-Pais-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.Testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio; // (exportacion por defecto) exportamos testimonio a app.js