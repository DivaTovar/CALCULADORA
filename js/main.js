function addToDisplay(value) {
    let display = document.getElementById("display");

    // Evitar múltiples puntos decimales en un número
    if (value === '.') {
        let current = display.value.split(/[\+\-\*\/]/).pop(); // Obtiene el último número
        if (current.includes('.')) {
            return; // No hacer nada si ya hay un punto en el número actual
        }
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}  /*Esta función se ejecuta cuando se presiona el botón C (limpiar).*/

function calcular() { // Obtiene el elemento de entrada (el display de la calculadora)
    let display = document.getElementById("display");
    try {
        // Evalúa solo si la expresión es válida
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = 'Error';
    }
}
