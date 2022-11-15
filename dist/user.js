"use strict";
const user1 = {
    name: "shrouq",
    age: 29,
    Specialization: "student",
    bestFrind: ["Areej", "Nouf", "Reema"],
};
function user(user) {
    return `Hello my name is ${user.name}, I'm ${user.age} years old, My Speciality is ${user.Specialization}, I have 3 best friends ${user.bestFrind}`;
}
console.log(user(user1));
