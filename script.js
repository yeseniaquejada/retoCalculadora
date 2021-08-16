import { datos } from './data/data.js';

let botonC = document.getElementById('botonC');
let resultado1 = document.getElementById('resultado1');
let inputR = document.getElementById('inputR');
let resultado2condicion = document.getElementById('resultado2condicion');
// let respuestaC = document.getElementById('btnresultado');
let arreglo = [];

botonC.addEventListener('click', e =>{
    e.preventDefault()
    capturar()
});

function capturar(){
    let Genero = document.querySelector(('input[name=Genero]:checked').value);
    let Edad = Number(document.getElementById('Edad').value);
    let Peso= Number(document.getElementById('Peso').value);
    let Altura = Number(document.getElementById('Altura').value);
    console.log(Peso)
    console.log(Altura);
    console.log(capturar);
    Datos(Genero, Edad, Peso, Altura);
    guardarDatos();
}

function Datos(Genero, Edad, Peso, Altura){
// Math.pow() devuelve la  base elevada al exponente
// toFixed() formatea un número usando notación de punto fijo, el número es cuantos decimales va a devolver 
let Masa = Number(Peso/Math.pow(Altura,2)).toFixed(1);
let calculo = 0;

        console.log(Masa);
        if (Masa < 18.5) {
        console.log('opcion 1');
        resultado1.innerHTML = ''

        resultado1.innerHTML = `<h2 style="color: blue">Su Masa Corporal es: ${Masa}</h2>`;
        resultado2condicion.innerHTML = `<h3 style="color: blue">Esta por debajo del peso</h3>`;
        inputR.setAttribute('value', Masa);
        // respuestaC.setAttribute("btnresultado")
        calculo = 1;
        }else if (Masa >= 18.5 && Masa <= 24.9) {
            console.log('opcion 2');
            resultado1.innerHTML = ''
    
        resultado1.innerHTML = `<h2 style="color: #0191F4">Su Masa Corporal es: ${Masa}</h2>`;
        resultado2condicion.innerHTML = `<h3 style="color:  #0191F4">Esta saludable</h3>`;
        inputR.setAttribute('value', Masa);
        // respuestaC.setAttribute("btnresultado")
        calculo = 2;
        }else if (Masa >= 25.0 && Masa <= 29.9){
            console.log('opcion 3');
            resultado1.innerHTML = ''
    
        resultado1.innerHTML = `<h2 style="color:  yellow">Su Masa Corporal es: ${Masa}</h2>`;
        resultado2condicion.innerHTML = `<h3 style="color: yellow">Esta con sobrePeso</h3>`;
        inputR.setAttribute('value', Masa);
        // respuestaC.setAttribute("btnresultado")
        calculo = 3;
        }else if (Masa >= 30.0 && Masa <= 39.9){
            console.log('opcion 4');
            resultado1.innerHTML = ''
    
        resultado1.innerHTML = `<h2 style="color:  orange">Su Masa Corporal es: ${Masa}</h2>`;
        resultado2condicion.innerHTML = `<h3 style="color: orange">Esta obeso</h3>`;
        inputR.setAttribute('value', Masa);
        // respuestaC.setAttribute("btnresultado")
        calculo = 4;
        }else if (Masa > 40){
            console.log('opcion 5');
            resultado1.innerHTML = ''
    
        resultado1.innerHTML = `<h2 style="color: red">Su Masa Corporal es: ${Masa}</h2>`;
        resultado2condicion.innerHTML = `<h3 style="color: red">Su obesidad es extrema o de alto riesgo</h3>`;
        inputR.setAttribute('value', Masa);
        // respuestaC.setAttribute("btnresultado")
        calculo = 5;   
        }
        datos.push({
            Genero: Genero,
            Edad: Edad,
            Peso: Peso,
            Altura: Altura,
            "Masa Corporal": Masa,
        });
            arreglo.push(datos);
            console.log(arreglo);
        }

    const guardarDatos = () => {
    localStorage.setItem('usuario', JSON.stringify(datos))
    console.log(guardarDatos);
}

let grafica1 = document.getElementById('grafica').getContext("2d");
let chart = new Chart(grafica1,{
    type: "bar",
    data:{
     labels:['Por de bajo del Peso', 'Saludable', 'Con Sobrepeso', 'Obeso', 'Obesidad Extrema'],
    datasets:
        [
            {
            label:"Estadisticas Masa Corporal",
            data:[2,4,2,6,1],
            backgroundColor:'rgb(230, 74, 25)',
            borderColor:'rgb(30, 132, 73)',
            }
        ]   
    }
})


