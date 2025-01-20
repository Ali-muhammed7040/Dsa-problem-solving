let number = 12345;
let numArray = String(number).split('')

let sum = 0;
for (let i = 0; i < numArray.length; i++) {
    sum += Number(numArray[i])  
}
console.log(sum,'sum final') 

let num2 = 2356;
let sumOfNum = 0
while(num2>0){
    let num = Math.floor(num2 % 10);
    sumOfNum += num; 
    num2 =  Math.floor(num2/10)
}
console.log(sumOfNum,'sumOfNum')