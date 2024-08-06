

//if(true)
{
let a=10;
const b=20;
var c=30;
}  //scope

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username="Ashish"

    function two(){
        const website="youtube"
        console.log(username)
    }
    
    two()
}
one()


if(true){
    const username="Ashish"
    if(username==="Ashish"){
        const website="youtube"
        console.log(username + website)
    }

}

function addone(num){
    return num + 1
    
}
addone(5)