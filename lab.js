const personOne = {
    name: {first: 'Timmy', last: 'Timtim'}, 
    age: 30,
    location: {city: 'New York', state: 'New York', zip: 10001}
    }
const personTwo = {
    name: {first: 'Julie', last: 'July'},
    age: 28,
    location: {city: "Albany", state: "New York", zip: 12201,}
    }
// 1. moveLocation() // 
const nLoc = {
    city: 'Rochester', state: 'New York', zip: 14604
}
function moveLocation(person,loc){
    person.location.city = loc.city;
    person.location.state = loc.state;
    person.location.zip = loc.zip;
    console.log(person.location);
}
moveLocation(personTwo,nLoc);
// 2. Married! //
const nLoc2 = {
    city: 'Mountain View', state: 'California', zip: 94035
}
personTwo.location = personOne.location;
console.log(personTwo); 
moveLocation(personOne,nLoc2);
console.log(personOne);
console.log(personTwo);
// 3. Person Three // 
const personThree = {
    name:{ first: "Billy", last: "Timjuly"},
         age: 0,
    location:{ city: "Hospital" , state: "Hospital", zip: 11111}
}
console.log(personThree.location);
personThree.location=personOne.location;
console.log(personThree.location);
// 4. Aging 20 years + Copying personThree location to new reference//
function incrementAge(obj, increaseAgeBy){
    obj.age += increaseAgeBy;
    console.log(obj.age)
}
incrementAge(personOne,20); //Age 30 to 50
incrementAge(personTwo,20); //Age 28 to 48
incrementAge(personThree,20); //Age 0 to 20

const personThreeNewLocation = {
    city: 'New View', state: 'Newfornia', zip: 94035
}
personThree.location = personThreeNewLocation;
const savedLocation = personThree.location; 
moveLocation(personThree,personThreeNewLocation);
console.log(personOne.location);

// 5. Aging 300 years + Cloning // Would like to know another alternative to deep cloning besides using structuredClone()
incrementAge(personOne,300);
incrementAge(personTwo,300); 
incrementAge(personThree,300);
const newNewLocation = {
    city: "Long Beach", state: "California", zip:91325
}

function clonePerson(original) {
    const newClone = {
        name: {},
        age: null,
        location: {}
    };
    newClone.name.first = original.name.first;
    newClone.name.last = original.name.last;
    newClone.age = 0;
    newClone.location.city = original.location.city;
    newClone.location.state = original.location.state;
    newClone.location.zip = original.location.zip;

    return newClone;
}

const clone3 = clonePerson(personTwo);
moveLocation(clone3,newNewLocation);
console.log(clone3);
console.log(personTwo);

// // 6. Hive Mind // 
// const thoughts = {
//     ideas: "Welcome to the hivemind."
// }
// function uploadToHivemind(object){
// object.thoughts=thoughts;
// }
// uploadToHivemind(personOne);
// uploadToHivemind(personTwo);
// uploadToHivemind(personThree);
// uploadToHivemind(clone1);

// console.log(personOne.thoughts);
// console.log(personTwo.thoughts);
// console.log(personThree.thoughts);
// console.log(clone1.thoughts);