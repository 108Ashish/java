//object literals
const mysym=Symbol("key1")

const jsuser={
    [mysym]:"mykey1",
    name:"ashish",
    age:19,
    email:'ashish@gmail.com',
    city:'guna',
    lastloginday:['monday','sunday']
}
//console.log(jsuser.email)
//console.log(jsuser['age'])
//console.log(jsuser[mysym])
//console.log(typeof mysym)
//Object.freeze(jsuser)
//console.log(jsuser)

jsuser.greeting=function(){
    console.log("hello world")
}
jsuser.greetingtwo=function(){
    console.log(`hello world ,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())