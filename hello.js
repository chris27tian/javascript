console.log("Bonjour en JavaScript !");
let a;
a = 3.14;
console.log(a);
//const a = 3.14; // Création d'une variable constanteconst a = 3.14; // Création d'une variable constante
a = 6.28;       // Impossible : a ne peut pas changer de valeur !
a = 6.28;       // Impossible : a ne peut pas changer de valeur !

//Incrémenter une variable de type nombre
let b = 0;      // b contient 0
b += 1;         // b contient 1
b++;            // b contient 2
console.log(b); // 2

let num1=0;
{
    num1=1;// ok num 1declare dans le bloc
    const num2=0;
}

console.log(num1);
//console.log(num2);

const f = 100;
console.log("f contient " + f); // "f contient 100"

const saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
const nb = Number(saisie); // nb est de type nombre
// ...

const nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
// ...

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // "36.9 37.6 37.1"

// instruction IF
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
