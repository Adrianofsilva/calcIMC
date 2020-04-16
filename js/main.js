



// PESO
var pesoSlider = document.getElementById("peso")
var pesoOutput = document.getElementById("valorPeso")

pesoOutput.innerHTML = pesoSlider.value


pesoSlider.oninput = function () {
    pesoOutput.innerHTML = this.value
}


// ALTURA

var alturaSlider = document.getElementById("altura")
var alturaOutput = document.getElementById("valoraltura")

// alturaOutput.innerHTML = alturaSlider.value


alturaSlider.oninput = function () {
    alturaOutput.innerHTML = Number.parseFloat(this.value / 100)
}

// MOSTRAR VALOR IMC
var imcResult = document.getElementById("imcResult")

function calcIMC() {

    //converter altura p decimal

    var altura = alturaSlider.value / 100

    altura *= altura


    //calculando IMG
    var imc = pesoSlider.value / altura.toPrecision(4)



    //resultado IMC
    if (imc < 18.5) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#0092CE"
        console.log("1")

    } if (imc > 18.5 && imc < 24.9) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#70c022"
        console.log("2")
    }
    if (imc > 25.0 && imc < 29.9) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#E2A500"
        console.log("3")
    }
    if (imc > 30.0 && imc < 34.9) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#E56100"
        console.log("4")
    }
    if (imc > 35.0 && imc < 39.9) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#9D0B0B"
        console.log("5")
    }
    if (imc > 40.0) {
        imcResult.innerHTML = imc.toPrecision(4)
        imcResult.style.borderColor = "#770C0C"
        console.log("6")
    }

    console.log(imc)
}
