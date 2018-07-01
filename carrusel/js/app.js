// arreglo de imágenes a mostrar
let images = ["assets/images/paisaje1.jpg", "assets/images/paisaje2.jpg", "assets/images/paisaje3.jpg", "assets/images/paisaje4.jpg"];
// contador para controlar el recorrido de las imágenes
let count = 0;

// función que recibe contenedor html en el que se ubicarán las imágenes
function carrousel(container) {
    container.addEventListener("click", e => {
        // traer elementos del html, botones y contenedor de imágenes
        let back = container.querySelector(".back");
        let next = container.querySelector(".next");
        let img = container.querySelector("img");
        let target = e.target; //identifica elemento html que detona el evento, next o back
        //console.log(target)

        if (target == back) { // si target es igual al elemento con clase back, hará las siguientes condiciones para ir una imagen atrás
            if (count > 0) { // si la variable count es mayor a 0
                img.src = images[count - 1]; // la ruta va a ser igual al arreglo images con la posición del contador menos 1
                //console.log(img.src)
                count--; // restarle de uno en uno al contador
            } else { // hacerlo de manera infinita hacia atrás
                img.src = images[images.length - 1]; // restarle 1 al índice del arreglo
                //console.log(img.src)
                count = images.length - 1;
            }
        } else if (target == next) { // si target es igual al elemento con clase next, hará las siguientes condiciones
            if (count < images.length - 1) { // si count es menor a la última imagen
                img.src = images[count + 1]; // le suma uno
                count++; // aumenta de uno en uno el contador
            } else {
                img.src = images[0]; // si no es menor regresa a la primer imagen en posición 0
                console.log(img.src)
                count = 0;
            }
        }
    })
};

// cuando todo el documento está cargado se ejecutará la función del carrousel
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container"); // documento html que contiene todos los elementos

    carrousel(container);
});