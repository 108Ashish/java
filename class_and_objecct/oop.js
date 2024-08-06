const user={
    username:"Ashish",
    logginecount:8,
    password:"singh",
   getuserdetail: function(){
    // console.log(`username:${this.username}`)

    }


}
// console.log(user)
// user.getuserdetail()



function user1(username,logginecount,isLogin){
    this.username=username
    this.logginecount=logginecount
    this.isLogin=isLogin
}
const userone=new user1('ashis',18,'true')
const usertwo=new user1('hitash',1,'false')
console.log(userone);
