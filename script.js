/* Dette er et objekt */
let person = {
    name: "Haris",
    age: 28,
    city: "Odense",
    status: "In a complicated and not satisfying relationship, but she is hot.",

}

//opgave 1: 

console.log(person.name) /* dot notation */
console.log(person.age) /* dot notation */
console.log(person.city) /* dot notation */
console.log(person.status) /* dot notation */

console.log(person["name"]) /* brackets natation */
console.log(person["age"]) /* brackets natation */
console.log(person["city"]) /* brackets natation */
console.log(person["status"]) /* brackets natation */

//opgave 2:

let secondPerson = {
    firstname: "Frank",
    lastname: "Hvam",
    married: true,
    age: 54, 
    hometown: "København", 
    hobbies: ["Reptiler", "Capser", "Klovne"],
    pets: {
      type: "Klapperslange", 
      name: "Mia"
    },
}



secondPerson.pets.forEach(function(pet) {
    
    
})