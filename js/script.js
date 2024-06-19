var inputTemp = document.getElementById("celcius-input");
var outputTemp = document.getElementById("output-text");
var conversionText = document.getElementById("conversion-description");
var originalInput;
var newTemp;

function convertTemp(input) {
    newTemp = input * 9;
    newTemp /= 5;
    newTemp += 32;
    return newTemp;
}

function calculate() {
    if (!inputTemp.value) {
        alert("Mohon isi bagian suhu Celcius (°C)")
        outputTemp.innerHTML = "Fahrenheit (°F)";
        outputTemp.style.color = "#2C4E80";
        outputTemp.style.opacity = "47%";
        conversionText.innerHTML = "---";
    } else {
        originalInput = inputTemp.value;
        originalInput = parseInt(originalInput);
        newTemp = convertTemp(originalInput);
        outputTemp.innerHTML = newTemp.toFixed(2) + " °F";
        outputTemp.style.color = "#FFC55A";
        outputTemp.style.opacity = "100%";
        conversionText.innerHTML = "<I>S</I><sub>(°F)</sub> = ( "+ originalInput +"°C × <sup>9</sup>&frasl;<sub>5</sub>) + 32 = "+ newTemp +"°F";
    }
}

function reset() {
    inputTemp.value = "";
    outputTemp.innerHTML = "Fahrenheit (°F)";
    outputTemp.style.color = "#2C4E80";
    outputTemp.style.opacity = "47%";
    conversionText.innerHTML = "---";
}