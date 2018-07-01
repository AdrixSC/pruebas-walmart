// traer elementos por su id
let textarea = document.getElementById("message");
let counter = document.getElementById("counter");
let btnTwitter = document.getElementById("twittear");

// contador de caracteres
function counterCharacter() {
    // creando una variable count que inice en 0 y guarde la longitud del valor del textarea
    let count = 0;
    count = textarea.value.length;
    //console.log(counter.value)
    counter.value = 150 - count; // restarle a partir de 150 el valor ingresado

    // condicionales para que cambie el color del contador cada cierto número de carácteres y para que deshabilite el botón cuando no se cumpla la condición
    if (count > 150) {
        btnTwitter.disabled = true;
        btnTwitter.style.background = "#EEA5CC";
        counter.style.color = "red";
    } else if (count >= 130) {
        btnTwitter.disabled = false;
        btnTwitter.style.background = "#D61E80";
        counter.style.color = "orange";
    } else if (count >= 120) {
        btnTwitter.disabled = false;
        btnTwitter.style.background = "#D61E80";
        counter.style.color = "green";
    } else if (count <= 0) {
        btnTwitter.disabled = true;
        btnTwitter.style.background = "#EEA5CC";
    } else {
        btnTwitter.disabled = false;
        btnTwitter.style.background = "#D61E80";
        counter.style.color = "gray";
    }

}

// llamar la función anterior en un evento keyup que detecta el levantamiento de la tecla, al textarea
textarea.addEventListener("keyup", counterCharacter);