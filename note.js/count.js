function count(firts,last){
    var sum=0;
    for(var i=firts;i<last;i++){
      sum+=i;
    }
    return sum;
    
  }
  ans=count(1,100)
  console.log(ans)