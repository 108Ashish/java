// this : this mean current contest ko refer karta hai
const user={
    username:"Ashish",
    price: 9999,
    welcometomessage: function(){
        //console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }

}
user.welcometomessage()
//console.log(this)

function onne(){
    let username="Ashish"
    //console.log(this.username)
}
onne()

//const addtwo=(num1,num2) =>{
    //return num1 + num2;
//}
//console.log(addtwo(3,6))


const addtwo=(num1,num2) =>( num1 + num2)

console.log(addtwo(3,6))