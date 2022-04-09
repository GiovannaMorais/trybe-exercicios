const sum = (...args) => 
   args.reduce((add,curr)=> add + curr,0) 

console.log(sum(4, 7, 8, 9, 60));