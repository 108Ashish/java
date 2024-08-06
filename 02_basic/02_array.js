const marvel=['thor','ironman','captain']
const dc=['flash','batman','superman']
//marvel.push(dc)
//console.log(marvel)
//const allhero=marvel.concat(dc)
//console.log(allhero)
//++++++++spread++++++++++++++
const newhero=[...marvel,...dc]
console.log(newhero)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array=another_array.flat(Infinity)
console.log(array)
console.log(array.isarray("ashish"))
console.log(array.from("ashish"))
console.log(array.from({name:"ashish"}))//interesting