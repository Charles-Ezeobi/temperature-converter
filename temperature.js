function celsiusToKelvin() {
    let temperature = document.getElementById("temperature").value;

    temperature = Number(temperature);  // Convert the input to a number

    let result = temperature + 273;  // Formula to convert Celsius to Kelvin

    document.getElementById("result").innerHTML = "Result is " + result + " K";
}

function kelvinToCelsius() {
    let temperature = document.getElementById("temperature").value;

    temperature = Number(temperature);  // Convert the input to a number

    let result = temperature - 273;  // Formula to convert Kelvin to Celsius

    document.getElementById("result").innerHTML = "Result is " + result + " °C";
}
