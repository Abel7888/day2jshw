//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFood(object) {
    for (let key in object) {
      console.log(`${key}:`)
  
      if (Array.isArray(object[key])) {
        for (const item of object[key]) {
          if (item instanceof Object) {
            for (const i in item) {
              console.log(`  ${i}:`)
              console.log(`  ${item[i]}`)
            }
          } else {
            console.log(`  ${item}`);
          }
        }
      } else {
        console.log(` ${object[key]}`);
      }
    }
  }
  


favoriteFood(person3)

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name = 'Abel the hooper', age = 35) {
      this.name = name
      this.age = age
    }
    makeOlder(increment = 1) {
      this.age += increment
    }
    printInfo = () => {
      console.log(`${this.name} is ${this.age} years old`);
    }
    titleCase(words) {
      words = words.split(" ").map(word =>
        word.charAt(0).toUpperCase()
        + word.slice(1).toLowerCase()
      )
      return words.join(' ')
    }
  }
  abby = new Person()
  susan = new Person('susan', 20)
  susan.makeOlder()
  susan.makeOlder(2)
  abby.printInfo()
  ruth.printInfo()
  
  // output:
  // Abel the hooper is 35 years old
  // susan is 23 years old
  
  // Use an arrow to create the printInfo method
  
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
