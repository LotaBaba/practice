

var hi ={
      name:"Shabab",
     input:0,
      total:0,
      save:[],
      method: (x)=>{
            hi.input=x;
      for(let i = 1; i<= x; i++){
                
               hi.total += i;
         }
             hi.save [x] = hi.total;
               console.log(hi.save);
               
      
}
 hi.method(12);

