const inputTemperatura = document.getElementById("temperatura");
const botonConvertir = document.getElementById("convertir");

const resultadoFahrenheit = document.getElementById("fahrenheit");
const resultadoKelvin = document.getElementById("kelvin");
const mensajeError = document.getElementById("error");

botonConvertir.addEventListener("click", convertir);

function convertir() {

    let temperatura = Number(inputTemperatura.value);

    if (isNaN(temperatura)) {
        
        mensajeError.textContent = "Ingrese un valor valido";

        resultadoFahrenheit.textContent = "";
        resultadoKelvin.textContent = "";

        return;
    }

    mensajeError.textContent = "";

    let fahrenheit = (temperatura * 9 / 5) + 32;
    let kelvin = temperatura + 273.15;

    resultadoFahrenheit.textContent = fahrenheit + "°F";
    resultadoKelvin.textContent = kelvin + "°K";
}

