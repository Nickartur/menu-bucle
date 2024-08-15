console.log("TIENDA ELECTRO");
console.log("==============");
console.log("1. Comprar");
console.log("2. Ver Orden");
console.log("3. Anular Orden");
console.log("4. Pagar Orden");
console.log("5. Salir");
console.log("6. Hablar con ejecutivo")
console.log("7. Volver al menú principal")

const readline = require("readline");
const { promisify } = require("util");

const captura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pregunta = promisify (captura.question).bind(captura);

let opcionUsuario = "";
let volverAPreguntar = true; // variable booleano
captura.question("Ingrese su nombre: ", async (respuesta) => {
  console.log("Hola " + respuesta + " ingrese una opcion del menu: ");
  while(volverAPreguntar){ //mientras volver a preguntar sea verdadero, se repetira. No se escribe =true dado que es booleano, aunque se puede agregar, no daria problema
    
  var opcionSel = await pregunta("Ingrese una opcion: ");
    
  //captura.question("OPCION: ", (opcionSel) => { // esperar respuesta de usuario, es necesario, sino queda en bucle
    console.log("Haz seleccionado la opción: " + opcionSel);
    if (["1","2","3","4","5","6","7"].includes(opcionSel)){
      console.log("Opción correcta.");
      opcionUsuario = opcionSel;
      volverAPreguntar = false;
      
    } else { 
      console.clear(); // Limpiar la consola
      console.log("Opcion no valida.");
      volverAPreguntar = true;
    }
// });
  }
});
