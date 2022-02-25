const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name){
// return cats.push(name)};



const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = name => [...cats, name];

const prependCat = name => [name, ...cats];

const removeLastCat = () => [...cats.slice(0, (cats.length-1))];

const removeFirstCat = () => [...cats.slice(1)];
























// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat (name){
//     return cats.push(name)
// }

// function destructivelyPrependCat (name){
//     return cats.unshift(name)
// }

// function destructivelyRemoveLastCat (){
//     return cats.pop();
// }

// function destructivelyRemoveFirstCat(){
//     return cats.shift();
// }

// function appendCat (name){
//    return [...cats, name];
// }

// function prependCat (name){
//     return [name, ...cats];
// }

// function removeLastCat(){
//     return cats.slice(0,-1);
// }

// function removeFirstCat(){
//     return cats.slice(1);
// }

