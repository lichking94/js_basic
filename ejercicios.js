

var tipoDeSuscripcion  =  "Free";



function Suscripcion(){

   if(tipoDeSuscripcion ==  "Basic")
   {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
   }
   else if(tipoDeSuscripcion == "Expert")
   {
   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
   }
   else if(tipoDeSuscripcion == "ExpertPlus")
   {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
   }
   else
   {
   console.log("Solo puedes tomar los cursos gratis");
   }
};

var tipoDeSuscripcion   =  "Basic";


function Suscripcion(){

   if(tipoDeSuscripcion ==  "Basic" || tipoDeSuscripcion == "Expert" ||  SuscritipoDeSuscripcionpcion3 == "ExpertPlus")
   {
   console.log(``); 
   }
   else
   {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
   }
};


let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    let userSuscription = "ExpertPlus";

    function tipoDeSuscripcion(userSuscription){
        for (let i=0; i < typeSuscripción.length; i++) {
            if (userSuscription == typeSuscripción[i]) {
                console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
            }
          }
    }

    let typeSuscripción = [
        "Free",
        "Basic", 
        "Expert", 
        "ExpertPlus"
        ];
        let infoSuscripción = [
        "solo puedes tomar los cursos gratis", 
        "puedes tomar casi todos los cursos de Platzi durante un mes", 
        "puedes tomar casi todos los cursos de Platzi durante un año", 
        "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
        let userSuscription = "Expert";
        for (let i=0; i < typeSuscripción.length; i++) {
          if (userSuscription == typeSuscripción[i]) {
              console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
          }
        }
    

        1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?

Un ciclo es un bucle que se repite hasta que se cumpla una condición.

¿Qué tipos de ciclos existen en JavaScript?

Ciclo For, While, etc.

¿Qué es un ciclo infinito y por qué es un problema?

Un ciclo infinito es cuando la condición es infinita, nunca se cumple y, por lo tanto, no existe termino al proceso, por consecuencia nuestro código puede fallar y ralentizar nuestras computadoras.

¿Puedo mezclar ciclos y condicionales?

Sí, podemos condicionar un ciclo para que se repita todas las veces hasta que se cumplan una condición que internamente puede tener otra condición para su evaluación.