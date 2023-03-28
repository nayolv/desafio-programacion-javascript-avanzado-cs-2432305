// Cargar las imágenes contenidas en la constante rutasImagenes utilizando Promise.all
// Luego cargadas, agregarlas al div #contenedor

const rutasImagenes = imagenes;
const contenedor = document.getElementById("contenedor");

Promise.all(rutasImagenes)
    .then((arr) =>
        arr.forEach(img => {
            const images = document.createElement("img");
            images.src = img.src;
            contenedor.appendChild(images);
  }
  
  ))
  .catch((err) => console.log(err));
