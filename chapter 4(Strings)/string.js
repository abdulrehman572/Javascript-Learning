//string is a sequence of chracters enclosed in single or double quotes
let str="abdul rehman"
console.log(str)
let name='ali'
console.log(name)
console.log((name.length))

//Template literals  or string interpolation
//we can insert variables directly in  in template literal and is string interpolation 
let boy1="ali"
let boy2="ahmad"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)
/*Escape Sequance Chracter
if you will try to print following js will misunderstand 
let  fruit ='ban'na'
istead you can use escape sequance character for that like
let fruit='ban\'na'
this will be printed like ok*/
let fruit='ban\'na'
console.log(fruit)
//same will be in case of double quotes
let fruit1="oran\"ge"
console.log(fruit1)