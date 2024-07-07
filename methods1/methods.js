const string = "Hello";
const strings = ["hello", "world", "im", "ada"];
const numbers = [1, 2, 3, 4];
const number = 738;
let res = "res";
/*====================*/

/* res = new Set(strings)
res = [...res] */

// RENVOIENT DES BOOLÉENS :

//res = numbers.every(el => el > 0)

// every() : Check si tous les élements valident une condition
//res = numbers.every(el => el > 2)
// some() : Check si au moins un element valide la condition
//res = numbers.some(el => el > 2)
// includes() : Check si un élément est inclus dans un tableau
//res = numbers.includes(12)

// MODIFIENT DES TABLEAUX :

// push()
//numbers.push(5)
// unshift()
//numbers.unshift(0)
// pop()
//numbers.pop()
// shift()
//numbers.shift()
//console.log('numbers', numbers)

// RENVOIENT DES TABLEAUX :

// reverse() : Inverse le tableau mais modifie le tableau d'origine
//res = numbers.reverse();
// filter() : Laisse passer l'élément d'un tableau si l'opération vaut true
//res = numbers.filter((el) => el > 1 && el < 3);
// split() : Découpe une chaine de caractères et place chaque élément dans un tableau
//res = string.split("");
// map() : Renvoie le résultat de l'opération dans un nouveau tableau
//res = numbers.map(el => el + 1)
// slice() : Extrait les éléments depuis la borne basse à la borne haute sans modifier le tableau d'origine
//res = numbers.slice(0, 1);
// splice() : La même chose que slice() mais modifie le tableau d'origine
//res = numbers.splice(0, 1);
// concat() : Permet de concaténer deux strings ou même deux tableaux
//res = numbers.concat(strings)
// sort()
//res = strings.sort()
// Array.from()
//res = Array.from(string);
// fill() : Remplit tous les éléments d'un tableau entre deux index (2 et 4) avec une valeur statique, ici 0
//numbers.fill(0, 2, 4);
// reduce()
//res = strings.reduce((acc, val) => acc + val, 0)

// RENVOIE UN NUMBER :
// indexOf()
//res = strings.indexOf('im')
// findIndex() : Renvoie le premier index trouvé parmis les elements qui valident la condition
//res = numbers.findIndex(el => el > 15)

// RENVOIENT DES ELEMENTS :
// find() : trouve le 1er élément en fonction d'une condition
//res = numbers.find(element => element > 0)
// at() : Renvoie l'element à un index donné, très similaire à tab[i], mais avec des options en plus

// RENVOIE UNE STRING :
// join() : joint tout avec ',' comme séparateur par défault. Mettre .join('') pour tout coller
//res = numbers.join()
// toString()
// replace() : Remplace un caractère par un autre dans une string
//res = string.replace("o", "a");

// BOUCLE :
// forEach() : boucle dont l'element et l'index sont accessibles
//numbers.forEach(el => console.log(el + 1))

/*====================*/

const initialState = {
    foo: [1],
    switch: false,
};
let state = {};

function FooReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FOO":
            return Object.assign({}, state, { foo: action.foo, switch: true });

        case "PUSH_FOO":
            return Object.assign({}, state, {
                foo: [...state.foo, action.foo],
                switch: !state.switch,
            });

        default:
            return state;
    }
}

function dispatch(obj) {
    state = FooReducer(state, { type: obj.type, foo: obj.foo });
    console.log("newState", state);
}

dispatch({ type: "SET_FOO", foo: [1, 2] });
dispatch({ type: "PUSH_FOO", foo: 3 });
dispatch({ type: "PUSH_FOO", foo: 6 });

/*====================*/

/* const users = [
  {
    name: 'Pierre',
    country: 'France'
  },
  {
    name: 'Jean',
    country: 'Espagne'
  },
  {
    name: 'Theo',
    country: 'France'
  },
  {
    name: 'Simon',
    country: 'Portugal'
  }
] */

//reduce
//new Set
// Array from

//res = strings.reduce((acc, val) => acc + val)

/*====================*/

console.log("strings", strings);
console.log("string", string);
console.log("numbers", numbers);
console.log("res", res);
