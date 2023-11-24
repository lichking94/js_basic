console.log("Hola mundo en js");

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btncalcular = document.getElementById('btncalcular');
const presult  = document.querySelector('#result');


//Cambir el color del boton escuchando el evento click 

btncalcular.addEventListener("click", changeBackground);

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }


function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
 



//aqui estamos escuchando el evento del formulario
form.addEventListener('submit',sumInputs)

function sumInputs(event){
    console.log({event});
    event.preventDefault();
    const sumInputs = Number(input1.value) + parseInt(input2.value); 
    presult.innerHTML = "Resultado: " + sumInputs;
}





// aqui estamos escuchando el evento del boton para seguir con este metodo hay que cambiar
// el type que viene por defecto del button  y colocarlo type button 

/*btncalcular.addEventListener('click',btnOnClick)

function btnOnClick(){
    const sumInputs = Number(input1.value) + parseInt(input2.value); 
    presult.innerHTML = "Resul*??tado: " + sumInputs;
}*/