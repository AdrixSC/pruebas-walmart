let hands = document.querySelectorAll(".hand"); // llamar  nodos con la clase hand
let handsArray = Array.from(hands); // convertir en array la colección de html de la clase hand

function updateClock() {
    let date = new Date(); // nos da el tiempo actual
    let hourDegree = (date.getHours() + date.getMinutes() / 60) / 12 * 360; // convierte la hora en grados
    let minuteDegree = date.getMinutes() / 60 * 360; // convierte los minutos en grados
    let secondDegree = (date.getSeconds() + date.getMilliseconds() / 1000) / 60 * 360; // convierte los segundos en grados

    handsArray.map(() => { // iterar en el array que contiene los nodos
        // llamar nodo que contiene la hora
        let hour = document.getElementById("hour");
        //console.log(hour)
        // aplicar estilo transform sumándole a los grados los que se calcularon anteriormente para que se mueva la manecilla
        hour.style.transform = 'rotate(' + hourDegree + 'deg)';
        // llamar nodo que contiene los minutos
        let minute = document.getElementById("minute");
        //console.log(minute)
        // aplicar estilo transform sumándole a los grados los que se calcularon anteriormente para que se mueva la manecilla
        minute.style.transform = 'rotate(' + minuteDegree + 'deg)';
        // llamar nodo que contiene los segundos
        let second = document.getElementById("second");
        //console.log(second)
        // aplicar estilo transform sumándole a los grados los que se calcularon anteriormente para que se mueva la manecilla
        second.style.transform = 'rotate(' + secondDegree + 'deg)';
    })

    requestAnimationFrame(updateClock) // metodo para realizar animación y programa el repintado, dándole como parámetro a la función de actualizar reloj
};

updateClock();