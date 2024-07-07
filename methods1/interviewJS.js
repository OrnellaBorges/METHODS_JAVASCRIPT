/* Javascript

Différence entre == et ===

- Le type 

Difference entre var let et const 

Qu'est-ce que la closure en JavaScript et comment fonctionne-t-elle ? */

/* Une closure est une fonction interne qui a accès aux variables de sa fonction parente, même après que la fonction parente ait été exécutée. Elle conserve une référence à ses variables externes, ce qui lui permet d'y accéder ultérieurement.
 */

/* ====================================== */

/* Qu'est-ce que la différence entre null et undefined en JavaScript ? 

null est une valeur affectée à une variable qui indique l'absence de valeur intentionnelle, tandis que undefined indique qu'une variable n'a pas encore été définie ou n'a pas de valeur attribuée.


Comment pouvez-vous les distinguer dans votre code ?
Vous pouvez distinguer null de undefined en utilisant l'opérateur de stricte égalité (===). */

// Exemple de différence entre null et undefined
let variableNull = null; // variableNull est définie avec la valeur null
let variableUndefined; // variableUndefined est déclarée mais non définie, par défaut elle vaut undefined

console.log(variableNull); // Affiche: null
console.log(variableUndefined); // Affiche: undefined

// Comparaison avec l'opérateur de stricte égalité (===)
console.log(variableNull === null); // Affiche: true
console.log(variableUndefined === undefined); // Affiche: true

// Comparaison entre null et undefined
console.log(variableNull === undefined); // Affiche: false
console.log(variableUndefined === null); // Affiche: false

/* variableNull est explicitement définie avec la valeur null.
variableUndefined est déclarée mais non initialisée, elle prend donc la valeur undefined par défaut.
L'opérateur de stricte égalité (===) compare non seulement les valeurs, mais aussi les types, donc null === null et undefined === undefined renvoient true.
En utilisant ===, nous distinguons clairement entre null et undefined, car null === undefined renvoie false.
Cela démontre comment vous pouvez différencier null de undefined dans votre code en utilisant l'opérateur de stricte égalité (===). */

/* ====================================== */

/* Comment fonctionne le contexte (this) en JavaScript ? Pouvez-vous donner des exemples de situations où le contexte peut être déroutant et comment vous les résoudriez ?

Le contexte (this) en JavaScript se réfère à l'objet sur lequel une fonction est appelée. Il peut être déterminé de différentes manières en fonction du contexte d'appel de la fonction. Les situations déroutantes incluent l'utilisation de this à l'intérieur des fonctions imbriquées, dans les callbacks, ou lors de l'utilisation de méthodes d'objet. Il est important de comprendre comment this est lié dans chaque contexte et d'utiliser des techniques comme .bind(), .call(), ou .apply() pour contrôler explicitement le contexte.


Exemple :  */

const obj = {
    name: "John",
    greet: function () {
        console.log(`Hello, ${this.name}`); // 'this' fait référence à 'obj'
        function innerFunction() {
            console.log(`Goodbye, ${this.name}`); // 'this' n'est plus lié à 'obj', il est undefined ou au contexte global
        }
        innerFunction();
    },
};

obj.greet();

/* Qu'est-ce que le concept de currying en JavaScript ? Comment pouvez-vous l'implémenter et quelles sont ses applications pratiques ?

Le currying est une technique de transformation d'une fonction prenant plusieurs arguments en une séquence de fonctions prenant un seul argument. Vous pouvez l'implémenter en définissant une fonction qui renvoie une autre fonction qui attend le prochain argument. Les applications pratiques du currying incluent la création de fonctions partiellement appliquées, la composition de fonctions et la création de fonctions utilitaires génériques. */

/* ====================================== */

/* *concept de References 

En JavaScript, les références font référence à la façon dont les variables et les valeurs sont manipulées et stockées en mémoire. Comprendre les références est crucial pour éviter les pièges liés à la manipulation d'objets et de données complexes. Voici quelques points clés à savoir sur les références en JavaScript :

Références aux valeurs primitives : En JavaScript, les variables qui contiennent des valeurs primitives (comme des nombres, des chaînes de caractères, des booléens, etc.) stockent directement la valeur elle-même. Lorsque vous affectez une variable à une autre variable, une copie de la valeur primitive est créée.

Exemple :
 */
let a = 5;
let b = a;
b = 10;
console.log(a); // Affiche: 5 (la valeur de 'a' n'est pas modifiée)
console.log(b); // Affiche: 10

/* Références aux objets : En revanche, lorsqu'il s'agit d'objets (y compris les tableaux et les fonctions), les variables stockent une référence à l'emplacement en mémoire où l'objet est stocké. Ainsi, lorsque vous affectez un objet à une autre variable, les deux variables font référence au même objet en mémoire. Modifier l'un modifiera également l'autre car ils pointent tous deux vers le même emplacement en mémoire.

Exemple : */

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // Affiche: 20 (la modification est reflétée dans 'obj1')
console.log(obj2.value); // Affiche: 20

/* Passage par référence et passage par valeur : En JavaScript, les arguments sont passés par valeur pour les types de données primitifs et par référence pour les objets. Cela signifie que lorsque vous passez une variable contenant une valeur primitive à une fonction, une copie de la valeur est passée, tandis que lorsque vous passez une variable contenant un objet à une fonction, une référence à l'objet est passée.

Exemple :
 */

function changeValue(num) {
    num = 10;
}

let x = 5;
changeValue(x);
console.log(x); // Affiche: 5 (la valeur de 'x' n'est pas modifiée)

function changeObjectValue(obj) {
    obj.value = 10;
}

let y = { value: 5 };
changeObjectValue(y);
console.log(y.value); // Affiche: 10 (la valeur de 'y' est modifiée car elle fait référence à un objet)

/* Clonage d'objets : Lorsque vous devez copier un objet mais que vous souhaitez créer une nouvelle référence distincte (et non pas simplement une référence à l'objet d'origine), vous devez effectuer un clonage d'objet. Vous pouvez utiliser diverses techniques pour cela, notamment Object.assign(), la syntaxe de décomposition (...), ou des bibliothèques telles que Lodash.

Exemple : */

let originalObj = { a: 1, b: 2 };
// Clonage d'objet avec Object.assign()
let clonedObj = Object.assign({}, originalObj);

/* En résumé, les références en JavaScript déterminent comment les valeurs et les objets sont stockés et manipulés en mémoire. Comprendre la différence entre les valeurs primitives et les objets, ainsi que la manière dont les références sont passées et manipulées, est essentiel pour écrire du code JavaScript efficace et sans erreur. */

//mutation
/* La mutation en JavaScript se réfère à la modification des valeurs des objets après leur création. Contrairement aux types de données primitifs tels que les nombres et les chaînes de caractères, qui sont immuables (c'est-à-dire qu'ils ne peuvent pas être modifiés une fois créés), les objets en JavaScript sont mutables, ce qui signifie que leurs propriétés peuvent être modifiées après leur création.

Par exemple, considérons un objet simple : */

let personne = {
    nom: "Alice",
    age: 30,
};

/* 
  Si nous voulons modifier la valeur de la propriété age de cet objet, nous pouvons le faire directement : */

personne.age = 31;
console.log(personne.age); // Affiche: 31

/* Dans cet exemple, la mutation a lieu lorsque nous changeons la valeur de la propriété age de l'objet personne.

La mutation peut être utile dans de nombreux cas, mais elle peut également entraîner des effets secondaires imprévus, en particulier dans les applications complexes. Il est important de comprendre comment les objets sont référencés et partagés en JavaScript pour éviter les erreurs liées à la mutation.
 */

/* Shallow Copy : Une shallow copy d'un objet crée une nouvelle copie de l'objet principal, mais elle ne copie que les références aux objets imbriqués (les sous-objets ou les tableaux). Les références aux objets imbriqués sont copiées, mais pas les objets eux-mêmes. Par conséquent, si vous modifiez les sous-objets dans la copie, cela affectera également les sous-objets de l'original, car ils partagent la même référence. Cela peut être considéré comme une copie "peu profonde".*/

// Original object
const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "hiking"],
};

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);

// Modifying a property of the shallow copy
shallowCopy.name = "Alice";

// Modifying an element of the array within the shallow copy
shallowCopy.hobbies.push("cooking");

console.log(original); // { name: 'John', age: 30, hobbies: [ 'reading', 'hiking', 'cooking' ] }
console.log(shallowCopy); // { name: 'Alice', age: 30, hobbies: [ 'reading', 'hiking', 'cooking' ] }

// Changes to hobbies array affect both original and shallow copy,
// since they share the same reference to the array.

/* Deep Copy : Une deep copy d'un objet crée une nouvelle copie de l'objet principal ainsi que de tous les objets imbriqués à l'intérieur de celui-ci. Cela signifie que chaque objet est répliqué complètement, y compris tous les objets imbriqués à n'importe quelle profondeur. Ainsi, même si vous modifiez les sous-objets dans la copie, cela n'affectera pas les sous-objets de l'original, car ils sont complètement indépendants. Cela garantit une totale isolation entre les objets originaux et les copies. */

// Original object
const origin = {
    name: "John",
    age: 30,
    hobbies: ["reading", "hiking"],
};

// Deep copy using JSON.parse(JSON.stringify())
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying a property of the deep copy
deepCopy.name = "Alice";

// Modifying an element of the array within the deep copy
deepCopy.hobbies.push("cooking");

console.log(original); // { name: 'John', age: 30, hobbies: [ 'reading', 'hiking' ] }
console.log(deepCopy); // { name: 'Alice', age: 30, hobbies: [ 'reading', 'hiking', 'cooking' ] }

// Changes to hobbies array only affect deep copy,
// since it's a completely independent copy.

/*   Dans cet exemple, la shallow copy est créée en utilisant Object.assign(), ce qui copie les propriétés de surface de l'objet, mais partage toujours les références aux objets imbriqués. Cela signifie que modifier les objets imbriqués dans la copie affectera également les objets originaux.

D'autre part, la deep copy est créée en utilisant JSON.parse(JSON.stringify()), qui crée une nouvelle chaîne JSON de l'objet et la parse ensuite pour créer une copie complètement indépendante de l'original. Les modifications apportées à la deep copy n'affectent pas l'objet original, car ils sont complètement isolés. */
