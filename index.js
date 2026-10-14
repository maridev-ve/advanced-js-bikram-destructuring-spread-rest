
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;
//console.log(ana);


/***********EJERCICIO 2***************/
const [{ email: emailLuis }] = empleados;

//console.log(emailLuis);


/***********EJERCICIO 3***************/

// Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a]

//console.log(a);
//console.log(b);


/***********EJERCICIO 4***************/
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

//console.log(maximaHoy);
//console.log(maximaManana);



/***********EJERCICIO 5***************/
function sumEveryOther(...arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];

    }
    return suma
}

//console.log(sumEveryOther(6, 8, 2, 3, 1));
//console.log(sumEveryOther(11, 3, 12));



/***********EJERCICIO 6***************/
function addOnlyNums(...arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number") {
            suma += arr[i];
        }
    };
    return suma
}

//console.log(addOnlyNums(1, "perro", 2, 4));


/***********EJERCICIO 7 ***************/
function countTheArgs(...arr) {
    return arr.length
}

//console.log(countTheArgs("gato", "perro"));
//console.log(countTheArgs("gato", "perro", "pollo", "oso"));




/***********EJERCICIO 8 ***************/
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

//console.log(combineTwoArrays([2,34,5,34,5], [4,563,46,3,57]));




/***********EJERCICIO 9 ***************/
function onlyUniques(...arr) {
    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        if (!elements.includes(arr[i])) {
            elements.push(arr[i])
        }
    }
    return elements
}

/* console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); */


/***********EJERCICIO 10 ***************/
//que pueda recibir cualquier cantidad de arrays como argumentos
//  y los combine todos en un solo array.

function combineAllArrays(...arr) {
    let arrays = [];
    for (const array of arr) {
        arrays.push(...array)
    }
    return arrays
}


console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); 
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));



/***********EJERCICIO 11 ***************/
function sumAndSquare (...arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i] ** 2;
    }
    return suma
}

//console.log(sumAndSquare(2,3,4,5,3,46,5,63,45));
