// alert ("ok")

// Afin de modifier notre page html selon les interactions d'un utilisateur, nous allons modifier notre grâce a JavaScript

// -------------------------------------------------
//  SELECTIONNER NOS ELEMENTS
// -------------------------------------------------

// Sélection via tag

let title = document.getElementsByTagName("h1");
console.log(title);

let lesP = document.getElementsByTagName("p"); // On cherche tous les paragraphes de notre page
//  Onrécuoère un array (tableau) d'éléments
console.log(lesP);
// Grâce à ma variables dans laquelle j'ai sélectionner tous les p je peux viser un seul des éléments, grâce à son index. Pour faire du CSS j'utilise la propriété `style` suivie des même déclaration que j'utilise en CSS, avec du camelCase 0 à la place de kebab-case.
// La propriété style permet d'accéder finement au style qui concerne un éléments particulier.

lesP[0].style.backgroundColor = "red";
lesP[0].style.color = "white";
lesP[0].style.textAlign = "center";
lesP[0].style.fontWeight = "bold";

// Selection via ID

let titre= document.getElementById("titre");
console.log(titre);

// Selection via classe

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);
// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'Ceci est le titre modifié avec JS'

let aChanger = document.getElementsByClassName ('subtitle');
console.log(aChanger);
aChanger[0].innerHTML = "<strong> ceci est le titre modifié avec JS </strong>";

// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

// 1ere façon de faire

//  lesP[0].style.textTransform= "uppercase";
//  lesP[1].style.textTransform= "uppercase";
//  lesP[2].style.textTransform= "uppercase";
//  lesP[3].style.textTransform= "uppercase";
//  lesP[4].style.textTransform= "uppercase";


//  2eme façon de faire
 for (let i=0;i < lesP.length; i ++) {
    lesP[i].style.textTransform = "uppercase";
 }

//  3eme façon de faire

// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.
 for ( let p  of lesP  ) {
    p.style.textTransform = "uppercase";

 }