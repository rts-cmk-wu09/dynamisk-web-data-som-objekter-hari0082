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

console.log(person["name"]) /* brackets notation */
console.log(person["age"]) /* brackets notation */
console.log(person["city"]) /* brackets notation */
console.log(person["status"]) /* brackets notation */

//opgave 2:

let secondPerson = {
    firstname: "Frank",
    lastname: "Hvam",
    married: true,
    age: 55, 
    hometown: "København", 
    hobbies: ["Kone", "Casper", "Klovn"],
    pets: {
      type: "Hund", 
      name: "Muffi"
    },
}
 //Det her et mit loop for mit array inde i mit objekt.
secondPerson.hobbies.forEach(hobby => {
    console.log(hobby)
})

// nestede objekt. 
console.log(secondPerson.pets.type)
console.log(secondPerson.pets.name)


//Opgave 3:

/* ikke påbegyndt */

//Træning i tempreal litterreal

document.querySelector('#person').innerHTML = `
    <h1>Info: </h1>
    <p> Navn: ${secondPerson.firstname} </p>
    <p> Efternavn: ${secondPerson.lastname} </p>
    <br>
    <p> Kæledyr: ${secondPerson.pets.type} </p>
    <p> Navn: ${secondPerson.pets.name} </p>

    `