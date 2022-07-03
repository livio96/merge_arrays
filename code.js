let array1 = ['1','2','3', '8', '100', '4', '65', '9', '7']
let array2 = ['5','6','43','8', '39', '74','9', '100'];
let array3 = [];
for(let i=0;i<array1.length;i++){
  if(array3.indexOf(array1[i]) == -1)
     array3.push(array1[i])
}
for(let i=0;i<array2.length;i++){
  if(array3.indexOf(array2[i]) == -1)
     array3.push(array2[i])
}

console.log(array3); 

