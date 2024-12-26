//String length check
let name="Abdul Rehman"
console.log(name.length) 
//To convert some string to upper case
console.log(name.toUpperCase())
console.log(name.length) 
//To convert some string to lower case
console.log(name.toLowerCase())
//to slice some string or target some specific string part
console.log(name.slice(2,5))   //include start but not end means from 2 to 4 5 not included
//if not gave 2nd argument to slice then it prints all remaining string starting from first argument index
console.log(name.slice(2))
//String replace
console.log(name.replace("Rehman","Majeed")) //this will replace rehman with majedd 

//concatinating strings
console.log(name.concat("is frined"," of"," Ali"))




//remove empty spaces
let freind="         ali      "
console.log(freind.trim())

//string are imulative by these methods you get a new string but orignal one is un changed 
// in order to access a chracter we use indexes like 
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])
console.log(name[7])
console.log(name[8])
console.log(name[9])
console.log(name[10])
console.log(name[11])
//you can use + to concatinate also
let friend1="ali"+"ahmad"
console.log(friend1)