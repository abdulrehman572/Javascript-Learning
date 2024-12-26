//to string method conversion of array to string
let a=[9,6,8,4,7]
let b=a.toString()
console.log(b) //prints string
console.log(a) //array array

//join method 
let c=a.join("_")

console.log(c)
console.log(typeof(c))
//pop removes or pops out last array element
r=a.pop()
console.log(a) //shows array after poping out element
console.log(r)//shows poped out element

//push adds new element to array

r=a.push(54)
console.log(a)  //arays after push
console.log(r) //returns array length

//shift removes the first element of array
r=a.shift()
console.log(a,r)
//unshift add new element to start of array

r=a.unshift(22)
console.log(a,r)

//delete 

delete a[0]
console.log(a)