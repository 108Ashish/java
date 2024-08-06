// function starpattern( nums){
//     for(let i=0;i<nums;i++){
//         var row=' ';
//         for(let j=0;j<nums;j++){
//             row+='*';

            
//         }
//         //console.log(row)
//     }
   

// }
//starpattern(5)


function printpattern(n) {
    var str = "";
    str += "*";
    for (var i = 0; i < n - 2; i++) {
      str = str + " ";
    }
    str +=  "*";
    console.log(str);
  }
  function starpattern(n){
    var str="";
    for(var i=0;i<n;i++){
      str+="*"
    }
    console.log(str)
  }
  function hollopattern(n){
    starpattern(n)
    for(var i=0;i<n-2;i++){
      printpattern(n)
    }
   starpattern(n)
  }
  hollopattern(10);
  
