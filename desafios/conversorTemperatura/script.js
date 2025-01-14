let inputCelsius = document.getElementById("n_celsius");
let rangeCelsius = document.getElementById("r_celsius");

let inputFahrenheit= document.getElementById("n_fahrenheit")
let rangeFahrenheit= document.getElementById("r_fahrenheit")

let inputKelvin= document.getElementById("n_kelvin")
let rangeKelvin= document.getElementById("r_kelvin")

// Função para atualizar o valor do input quando o range mudar
rangeCelsius.oninput = function() {
  inputCelsius.value = rangeCelsius.value;
  inputFahrenheit.value= (rangeCelsius.value*9/5)+32
};

rangeFahrenheit.oninput = function(){
    inputFahrenheit.value= rangeFahrenheit.value;
    inputCelsius.value= (rangeFahrenheit.value -32)* 5/9
}

rangeKelvin.oninput= function(){
   inputKelvin.value= rangeKelvin.value 
   inputFahrenheit.value= (rangeKelvin.value-273,15)*1.8+32
}
