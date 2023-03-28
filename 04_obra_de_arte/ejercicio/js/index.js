
// Crear una clase que cargue una imágen y que se muestre en la página.
const rutaImagen = '../imagenes/cute-cat.jpg'

class Imagen {
    ruta;

    constructor(url) {
        this.ruta = url;
    }
    
    crearImagen() {
        const img = document.createElement('img');
        img.src = this.ruta;
        document.body.appendChild(img);

    }
}
  

const imagen = new Imagen(rutaImagen);
imagen.crearImagen();