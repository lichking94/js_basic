function fullName (name,lastname){
    return name +' '+  lastname
};

fullName("Pablo","Magdaleno");

// las funciones son el metodo para encapsular bloqueos de codigo y asi poderlos utilizar a futuro 
// dentro de una funciona puede haber cualquier cosa
// reciben parametros cuando se crean y argumentos cuando se ejecutan


function sayhi(name,lastname,nickname){
    const completeName = fullName(name,lastname)
    console.log ("Mi nombre es" + completeName + " pero prefiero que me digas " + nickname + "." )
};
sayhi("pablo","Magdaleno","lichking");

// condicionales
// son la forma en que ejecutamos un bloqueo de codigo u otro dependiendo de alguna condicion


let tipoDeSuscripcion;


function suscripcion(tipoDeSuscripcion){
if(tipoDeSuscripcion == "free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
else if (tipoDeSuscripcion == "basic"){
    console.log("Puedes tomar casi todos los cursos durante un mes");
    return;
}
else if (tipoDeSuscripcion == "expert"){
    console.log("Puedes tomar casi todos los cursos durante un annio");
    return;
}
else{
    console.log("Puedes tomar para ti y un amigo todos los cursos  durante un annio");
    return;
}
};

suscripcion("expert");


// ciclos que son los ciclos es un bloque de codigo que se ejecuta hasta que se cumpla cierta condicion
//diferentes ciclos while for do while for each 

for (let i = 0; i <= 100; i++) {
    console.log("El valor de i es: " + i)
    
};


// el ciclo for permite crear la variable directamente en el ciclo
//el ciclo while se debe definir la variable que se va a usar para comparar

let i = 0;
while (i < 5 ) {
    
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}


// pedir al usuario datos 

let num1 = prompt("Ingresa un numero");
let num2 = prompt("Ingresa un numero");
let result = num1 + num2;

function operation(num1,num2){
    if(result == 4){
        console.log("El resultado es el correcto :D  "  + result);
    }
    else{
        console.log("Sigue intentando");
    }
};

 operation();

 let result;
 
 while (result != '4'){
   let question =  prompt("Cuanto es 2 + 2")
   result = question;
 }
 

 // array y objetos 

// Un array es una lista de elementos que pueden contener cualquier tipo de dato 

// Un objeto es una lista de elementos epro cada elemento tiene un nombre clave

const array = [1, 'Pablo', 23, 'Alexander'];

const obj = {
    name: 'Pablo',
    age: 29,
    favoriteFoods: ['Hamburguesa' , 'Pescado']
};


// cuando es mejor usar objetos o arrays, arrays cuando un elemento esl o mismo en todos los demas
// la regla se puede imcumplir mientras que un objeto se debe usar cuando los nombres de cada elemento
//son importantes para nuestro algoritmo

//se puede mezclar arrays u objetos
// si los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades

// imprime el primer elemento
function printFristElementArray (){
    const  datos =[23,'Pablo','Magdaleno',false,1994];

    for (let i = 0; i != datos.length; i ++) {
        console.log (datos[2]);
    }

};


// imprime el primer elemento metodo 2 
function printFristElementArray (arr) {
    console.log(arr[1]);
};

 printFristElementArray (["Pablo","Magdaleno",1]) 

 // imprime cada elemento 

 function printFristElementArray (){
    const  datos =[23,'Pablo','Magdaleno',false,1994];

    for (let i = 0; i <= datos.length; i ++) {
        console.log ( datos[i]);
    }

};


// imrpime cada elemento de un objeto


const obj = {
    name: 'Pablo',
    age: 29,
    favoriteFoods: ['Hamburguesa' , 'Pescado']
};


// las funciones en creacion reciben parametros 
function printEachObj (obj){
    const array = Object.values(obj);

    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);
        
    }
   
};

//recibe el argumento array

printEachObj(array);

moto = {
    marca: 'HJ',
    annio: 2022,
    tipo: 'Enduro'
}

moto = ['HJ',2022,'Enduro'];



// BONUS 
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏\


// este es el codigo  pero sin usar los else 
function suscripcionType(suscripcion){
if(suscripcion == "free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
 if (suscripcion == "basic"){
    console.log("Puedes tomar casi todos los cursos durante un mes");
    return;
}
if (suscripcion == "expert"){
    console.log("Puedes tomar casi todos los cursos durante un annio");
    return;
} 
if (suscripcion == "expertplus"){
    console.log("Puedes tomar para ti y un amigo todos los cursos  durante un annio");
    return;
}
    console.warn("Esta suscripcion no existe valida")
};

suscripcionType("expert");



// resolviendo el problema con un objeto

const typeSuscripción = {
    free:"Solo puedes tomar los cursos gratis",
    basic:"Puedes tomar casi todos los cursos durante un mes",
    expert:"Puedes tomar casi todos los cursos durante un annio",
    expertplus:"Puedes tomar para ti y un amigo todos los cursos  durante un annio"

};



function typeofSubs(suscripcion) {
    if (typeSuscripción[suscripcion]) {
        console.log(typeSuscripción[suscripcion]);
        return;
    }
    console.warn("Esta suscripcion no existe valida");
}


function showTypeSubs(typeSuscripción){

    const array = Object.values(typeSuscripción);

    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);
        
    }
   
};

showTypeSubs(typeSuscripción);

// otra forma de entrar a un valor de un objeto es "nombre del objeto"['valor']
// tambien se puede crear una varialbe cuyo valor sea un elemento del objeto 
// ejemplo const ejemplosuscripcion = 'free'