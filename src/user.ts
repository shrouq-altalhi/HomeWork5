interface User {
  name: string;
  age: number;
  Specialization: string;
  bestFrind: string[];
}
const user1: User = {
  name: "shrouq",
  age: 29,
  Specialization: "student",
  bestFrind: ["Areej", "Nouf", "Reema"],
};

function user(user: User) {
  return `Hello my name is ${user.name}, I'm ${user.age} years old, My Speciality is ${user.Specialization}, I have 3 best friends ${user.bestFrind}`;
}
console.log(user(user1));
