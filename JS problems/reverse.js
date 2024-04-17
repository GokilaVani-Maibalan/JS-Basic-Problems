
let a = userInput[0].split('')
 
  let new_Array = [];
 
 
 //For loop method
  for(let i=a.length-1; i>=0;i--){
      new_Array.push(a[i])
  }
console.log(new_Array.join(''))


//ES6 reduce() method
new_Array = a.reduce((acc,currValue)=> currValue+acc, "")
console.log(new_Array.join(''))


//reverse()method
new_Array = a.reverse()
console.log(new_Array.join(''))

// for of method
new_Array=''
 for(let ch of a){
   new_Array= ch + new_Array 
 }
 console.log(new_Array)


