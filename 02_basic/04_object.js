//object singleton
//const tinderuser=new Object()


const tinderuser={}
 tinderuser.id="123ash",
 tinderuser.name="ashish"
 tinderuser.islogedin=false
 //console.log(tinderuser)


 const obj1={4:"a",5:"c",9:"r"}
 const obj2={1:"w",2:"v",3:"o"}
 //const obj3={obj1 , obj2}
 const obj3=Object.assign(obj1,obj2)
 //console.log(obj3)


 const regular={
    email:"ashish@gmail.com",
    fullname:{
        userfullname:{
            first:"ashish",
            last:"singh"
        }

    }
 }
 //console.log(regular.fullname.userfullname)




 const course={
    coursename:"jswalla",
    price:999,
    courseinstractor:"ashish",
 }
 const {courseinstractor:ram}=course
 console.log(ram)

