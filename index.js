// Design a type alias named Car to represent a car object.
var myCar = {
    name: "BMW",
    modulNo: 123,
    year: 2022,
    colour: "red",
};
console.log(myCar);
var car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    engine: {
        horsepower: 200,
    },
};
console.log(car2);
// Function to engine's horsepower
function getHorsepower(car) {
    return car.engine.horsepower;
}
var thecar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    engine: {
        horsepower: 200,
    },
};
console.log(getHorsepower(thecar));
