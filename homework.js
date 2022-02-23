//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizzas:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_creams:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }
// for (let key in person3){
//     if (person3[key][0]instanceof Object){
//         console.log(`My Favorite ${key} are:`)
//         for (let index in person3[key][0]){
//             console.log(`${person3[key][0][index]} from ${index}`)
//         }
//     }
//     else if (person3[key]instanceof Array){
//         console.log(`My Favorite ${key} are:`)
//         for (food of person3[key]){
//             console.log(food)}
//     }   
//     else
//     {console.log(`My Favorite ${key} are ${person3[key]}`)}
//     }

    


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// class Person{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     };
//     printInfo = () => {console.log(`${this.name} is ${this.age} years old.`)}
//     incrementAge = (y) => {this.age+=y}
// }
// let Sam = new Person("Sam", 5);

// Sam.incrementAge(1)
// Sam.printInfo()
// Sam.incrementAge(1)
// Sam.printInfo()

// let Cali = new Person("Cali", 8);

// Cali.incrementAge(3)
// Cali.printInfo()
// Cali.incrementAge(3)
// Cali.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
// let wordLength = (string) =>{
//     return new Promise (
//         (resolve, reject)=>{
//             if(string.length > 10){
//                 resolve('Big word')}
//             else{
//                 reject('Small Number')
//             }
//         }
//         )
// }
// wordLength('I love JavaScript').then(
//     (result)=>{
//         console.log(`This is a ${result}`)
//     }
// ).catch(
//     (error)=>{
//         console.log(`This is a ${error}`)
//     }
// )