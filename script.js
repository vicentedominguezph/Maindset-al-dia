fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('noticias-container');
    data.noticias.forEach(noticia => {
      contenedor.innerHTML += `
      <div class="noticia">
        <img src="${noticia.imagen}" alt="Imagen IA generada"/>
        <h2>${noticia.titulo}</h2>
        <p class="fecha">🕒 ${noticia.fecha}</p>
        <p>${noticia.descripcion}</p>
        <p><strong>Comentario editorial:</strong> ${noticia.comentario}</p>
        <a class="boton-compartir" href="${noticia.link}" target="_blank">Leer noticia original</a>
      </div>`;
    });
  });
