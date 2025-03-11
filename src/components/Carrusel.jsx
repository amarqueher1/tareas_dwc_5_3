export default function Carrusel ({ imagenes, indiceActual }) {
  return imagenes.map((imagen, indice) => {
    const posicion = indice === indiceActual
      ? "activeSlide"
      : indice === (indiceActual - 1 + imagenes.length) % imagenes.length
        ? "lastSlide"
        : "nextSlide";
    
    return (
      <article key={imagen.id} className={posicion}>
        <img src={imagen.src} alt={imagen.img} className="person-img" />
        <h4>{imagen.img}</h4>
      </article>
    );
  })
}