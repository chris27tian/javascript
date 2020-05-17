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

// instrcution else
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
else {
  console.log(nombre + " est négatif ou nul");
}

// condiiton imbriqué
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else { // nombre === 0
    console.log(nombre + " est nul");
  }
}

// exprimer un choix
const meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris !");
}

// boucle while
console.log("Début du programme");
let nombre = 1;
while (nombre <= 20) {
  console.log(nombre);
  nombre++;
}
console.log("Fin du programme");


//boucle for
for (let i = 1; i <= 5; i++) {
    console.log(i); // OK
}


console.log(i); // Erreur : la variable i n'est pas visible ici

// decouverte des fonctions
function direBonjour() {
    console.log("Bonjour !");
  }
  
  console.log("Début du programme");
  direBonjour();
  console.log("Fin du programme");
  
  // portee des varaibles
  function direBonjour() {
    const message = "Bonjour !";
    return message;
  }


  // passage en parametres
  function direBonjour(prenom) {
    const message = `Bonjour, ${prenom} !`;
    return message;
  }
  
  console.log(direBonjour("Baptiste")); // "Bonjour, Baptiste !"
  console.log(direBonjour("Sophie")); // "Bonjour, Sophie !"

  
  console.log(direBonjour()); // "Bonjour !"
  console.log(message); // Erreur : la variable message n'existe pas ici

  //fonctions anonymes
  const bonjour = function(prenom) {
    const message = `Bonjour, ${prenom} !`;
    return message;
  }
  
  console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

// fonction fleche
const bonjour = (prenom) => {
    const message = `Bonjour, ${prenom} !`;
    return message;
  }
  
  console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

  // Dificile de faire plus concis !
const bonjour = prenom => `Bonjour, ${prenom} !`;

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

// POO
const stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
  };
  
  // Modification de la propriété "couleur"
  stylo.couleur = "rouge";
  
  // "J'écris avec un stylo bille rouge de marque Bic"
  console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);


// aurora
const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25
  };
  
  // "Aurora a 150 points de vie et 25 en force"
  console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);
  
  console.log("Aurora est blessée par une flèche");
  aurora.sante = aurora.sante - 20;
  
  console.log("Aurora trouve un bracelet de force");
  aurora.force = aurora.force + 10;
  
  // "Aurora a 130 points de vie et 35 en force"
  console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

  // methode 

  const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25,
  
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
    }
  };
  
  // "Aurora a 150 points de vie et 25 en force"
  console.log(aurora.decrire());
  