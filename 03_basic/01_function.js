function saymyname(){
    console.log("a")
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("s")
    console.log("h")
}
//saymyname();

//function addtwonumber(num1,num2){ //parameter inside the baraket
    //console.log(num1+num2)

//}
function addtwonumber(num1,num2){ 
      //let result=num1+num2;
      //return result;

      return num1+num2 

}
const result= addtwonumber(3,4) //argument inside the barket
//console.log("result :", result)

function loginuser(username="ram"){
    if(!username){
        console.log("please enter a user name")

    }
    return `${username} just login`

}

//console.log(loginuser("ashish"))
//console.log(loginuser())

function calculatecardprice(value1,value2,...n1){//he spread operator (...) in JavaScript is a versatile tool for manipulating arrays, functions, and objects by expanding their contents in various contexts.






    return n1;

}
//console.log(calculatecardprice(22,4,41,3,4,1))


const user={
    username:"Ashish",
    price:199
}

function object(anyobject){
    //console.log(`username is ${anyobject.username} price is ${anyobject.price}`)

}
object(user)


const myarr=[1,4,8,0]

function returnsecondvalue(getarray){
    return getarray[1]

}
console.log(returnsecondvalue(myarr))



function sum(index1, index2) {
    return index1 + index2;
  }
  
  function mul(index1, index2) {
    return index1 * index2;
  }
  
  function divi(index1, index2) {
    return index1 / index2;
  }
  
  function doathermatics(firstel, secondel, operator) {
    if (operator === sum) {
      return sum(firstel, secondel);
    } else if (operator === mul) {
      return mul(firstel, secondel);
    } else if (operator === divi) {
      return divi(firstel, secondel);
    } else {
      return "Unknown operation";
    }
  }
  
  let result = doathermatics(2, 3, sum);
  console.log(result); // Output: 5
  
  result = doathermatics(2, 3, mul);
  console.log(result); // Output: 6
  
  result = doathermatics(6, 3, divi);
  console.log(result); // Output: 2
  
  result = doathermatics(2, 3, function(a, b) { return a - b; });
  console.log(result); // Output: "Unknown operation"
  

