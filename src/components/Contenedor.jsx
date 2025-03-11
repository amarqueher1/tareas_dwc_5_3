import data from '../data';
import { useState, useRef } from 'react';
import Carrusel from './Carrusel';

export default function Contenedor() {
  const categorias = data.map((img) => img.categoria);
  const [indiceActual, setIndiceActual] = useState(0);
  const intervalo = useRef(null);

  if (!intervalo.current) {
    intervalo.current = setInterval(() => {
      setIndiceActual((indicePrevio) => (indicePrevio + 1) % data.length);
    }, 2000);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Slider DWEC</h2>
        <div className="underline"></div>
        <h3>{categorias[indiceActual]}</h3>
      </div>

      <div className="section-center">
        <Carrusel imagenes={data} indiceActual={indiceActual}/>
      </div>
    </section>
  );
}
