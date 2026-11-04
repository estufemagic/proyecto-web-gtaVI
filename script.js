document.querySelectorAll('.carrusel-era').forEach((carrusel) => {
  const pista = carrusel.querySelector('.carrusel-pista');
  const fotos = [...pista.querySelectorAll('.carrusel-enlace')];
  const indicador = carrusel.querySelector('.carrusel-indicador');
  let actual = 0;

  function mostrar(indice) {
    actual = (indice + fotos.length) % fotos.length;
    pista.style.transform = `translateX(-${actual * 100}%)`;
    indicador.textContent = `${actual + 1} / ${fotos.length}`;
  }

  carrusel.querySelector('.anterior').addEventListener('click', () => mostrar(actual - 1));
  carrusel.querySelector('.siguiente').addEventListener('click', () => mostrar(actual + 1));

  carrusel.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowLeft') mostrar(actual - 1);
    if (evento.key === 'ArrowRight') mostrar(actual + 1);
  });
  carrusel.tabIndex = 0;
  mostrar(0);
});