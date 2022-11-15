let numbers=[1,2,3,4,5];
let array1=["Anna","Maria"];
let array2=["Arek","Marek","Bartek","Tomek"];
let initialValue=0;

let substarctWithInitial=numbers.reduce(
    (previousValue, currentValue) => previousValue - currentValue, 
    initialValue
);

console.log(substarctWithInitial);


let addTwoArr=(array1,array2)=>[...array1,...array2];
console.log(addTwoArr(array1,array2));

let last=(array2)=>[array2.reverse()[0]]
console.log(last(array2));

let filter=(array1,value) => array1.filter(result => result === value);
console.log(filter(array2,"Arek"));

let sumElements=numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 
    initialValue
);
console.log(sumElements);

let zd5 = numbers.map(x=>x*x+3);
console.log(zd5);