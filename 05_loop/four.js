// for in 

const myObject={


js:'javascript',
cpp:'c++',
rb:'ruby'
}
for (const key in myObject ) {
  //  console.log(myObject[key])
    
}


//foreach
//The forEach() method calls a function for each element in an array.

//The forEach() method is not executed for empty elements.

const arr=['apple',"mango",'banana']
arr.forEach(function(val) {
   // console.log(val)
    
});

const code=[
    {
        languagename:'javascript',
        languagefilename:'js'
    },
    {
        languagename:'c++',

        languagefilename:'cpp'

    },
    {
        languagename:'java',
        languagefilename:'java'
    }
]
code.forEach(function(item){
    console.log(item.languagename)
})