const numbers = [7,17,13,19,6];
let max = numbers[0];

function findLargest(numbers){

 for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    
 }
    console.log(max);

};



console.log ({
    h1,
    p,
    parrafo,
    pid,
});

h1.innerHTML = 'Cmamo';
h1.innerText = 'Hola';
console.log (h1.getAttribute('class'));
console.log(h1.setAttribute('class','black'));



//modificar clases
h1.classList.add('red');
h1.classList.remove('red');

//metodos para trabajar con input
input1.value = "Ingresa un numero";
input2.value = "Ingresa un numero";


// crear elementos 

const img = document.createElement('img')
img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ro54is1o-E1whRElXPNiEdVqbFTlUZ8mZQ&usqp=CAU');
console.log(img)
console.log(document.createElement('img'));
console.log(document.createElement('span'));

// para enviar la imagen y que se vea en el html se puede usar el metodo append

pid.innerHTML ='';
pid.append(img);