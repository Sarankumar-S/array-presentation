var a={name:"dhoni",age:37,profession:"cricket"};
console.log(a);

for(var i in a){
  console.log(a[i]);
}
//associative arrays
var obj=new Object();
obj.salary=100000;
console.log(obj["salary"]);
//array operations
var list=["sachin","dravid","kohli","ashwin"];
console.log(list);
list.push("jadeja");  //adds element at the end of an array
console.log(list);
list.unshift("ishant");  //adds element at the first position of array
console.log(list);
list.pop();             //deletes the last elementin array
console.log(list);
list.shift();
console.log(list);         //deletes the first element in array


//shorthand arrays
var o=new Object();
var s={name:"parthiv patel",age:27};
console.log(s.age);
console.log(s.name);
console.log(s);
