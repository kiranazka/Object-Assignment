//Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
// define type of parameter

type Friend = {
    firstName: string,
    lastName: string,
    id: number,
    age: number,
    gender: string,
}
let people = {
    friends: [] as Friend[]
};

let friend1:Friend = {
    firstName: "wardah",
    lastName: "Naheed",
    id: 101,
    age: 20,
    gender: "female",

};
let friend2:Friend = {
    firstName: "Ahmad",
    lastName: "kamran",
    id: 102,
    age: 5,
    gender: "male",

};
let friend3:Friend = {
    firstName: "Ayesha",
    lastName: "khan",
    id: 103,
    age: 35,
    gender: "female",

};
people.friends.push(friend1, friend2, friend3);
console.log(people);

 