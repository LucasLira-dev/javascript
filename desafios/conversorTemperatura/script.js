let inputCelsius = document.getElementById("n_celsius");
let rangeCelsius = document.getElementById("r_celsius");

let inputFahrenheit= document.getElementById("n_fahrenheit")
let rangeFahrenheit= document.getElementById("r_fahrenheit")

let inputKelvin= document.getElementById("n_kelvin")
let rangeKelvin= document.getElementById("r_kelvin")

let btn_zerar= document.getElementById("btn_zerar")

// Função para atualizar o valor do input quando o range mudar
rangeCelsius.oninput = function() {
  inputCelsius.value = rangeCelsius.value;
  inputFahrenheit.value= ((rangeCelsius.value*9/5)+32).toFixed(2)
  inputKelvin.value= ((parseFloat(rangeCelsius.value)) +273.15).toFixed(2)
};

rangeFahrenheit.oninput = function(){
    inputFahrenheit.value= rangeFahrenheit.value;
    inputCelsius.value= ((rangeFahrenheit.value -32)* 5/9).toFixed(2)
    inputKelvin.value=((rangeFahrenheit.value -32) *5/9 + 273.15).toFixed(2)
}

rangeKelvin.oninput= function(){
   inputKelvin.value= rangeKelvin.value 
   inputFahrenheit.value= ((rangeKelvin.value-273.15)*1.8+32).toFixed(2)
   inputCelsius.value= (rangeKelvin.value- 273.15).toFixed(2)
}

btn_zerar.addEventListener("click", (evt)=>{
  inputCelsius.value= "0"
  inputFahrenheit.value= "0"
  inputKelvin.value= "0"
})
