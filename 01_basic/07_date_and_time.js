//DATE
let date=new Date()
console.log(date.toISOString())
console.log(date.toString())
console.log(date.toDateString())
let newdate=new Date("2004-01-30")
console.log(newdate.toLocaleDateString())
let timestamp=Date.now()
console.log(timestamp)
console.log(newdate.getTime())
console.log(Math.floor(Date.now()/1000))
newDate.toLocaleDateString('Defult',{
    weekday:"long"

})