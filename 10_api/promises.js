const promisOne=new Promise(function(resolve,reject){//Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.
    // Do any async task
    //DB calls,Caryptography,network
    setTimeout(function(){
        console.log("Async task is  completed")
        resolve()
    },2000)
})
promisOne.then(function(){
    console.log("promise consum")

})              //promisOne.then:-direct connection with "resolve" 
//bluebird and queue(old libr)


new Promise(function(resolve,reject){  //promisetwo
    setTimeout(function(){
        console.log('Asyn task2');
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn task2 is complet')
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Ashish',email:'ashishsingh@gmail.com',age:90})
    },1000)
})
promisethree.then(function(user){
    console.log(user)
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let errors=false;
        if(!errors){
            resolve({username:'Ashish',email:'ashish',age:10})
        }
        else{
            reject('ERROR : something went wrong ')
        }

    },1000)
})

promisefour.then((user)=>{
    console.log(user)
    return user.username

}).then((username)=>{
    console.log(username)

}).catch(function(err){   //catch:- it use for reject
    console.log(err)
}).finally(()=>console.log("any function will be call reject or resolve"))


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let errors=false;
        if(!errors){
            resolve({username:'Ashish',email:'ashish',age:10})
        }
        else{
            reject('ERROR : something went wrong ')
        }

    },1000)
})

async function consumpromisefive(){
    try {
        const respose= await promisefive
        console.log(respose)
        
    } catch (error) {
        console.log(error)
        
    }

}
consumpromisefive()

// async function getalluser(){
//     try {
//         const respose=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data=await respose.json()

//         console.log(data)
        
//     } catch (error) {

//         console.log(error)
        
//     }
    
// }
// getalluser()

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(respose){
   return respose.json()

}).then(function(data){
    console.log(data)

})
.catch(function(){
    console.log(error)
})