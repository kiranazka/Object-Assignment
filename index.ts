// Design a type alias named Car to represent a car object.

type Car = {
    name: string;
    modulNo: number;
    year: number;
    colour: string;

}
let myCar: Car= {
    name: "BMW",
    modulNo: 123,
    year: 2022,
    colour: "red",
};
console.log(myCar);
//Include a nested object named engine within Car, containing a property named horsepower (number)
type Car2 = {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: {
      horsepower: number;
    };
  };

let car2: Car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    engine: {
      horsepower: 200,
    },
  };
console.log(car2);

//3. Define a function named getHorsepower directly within the Car type alias to retrieve the engine's horsepower.
type theCar = {
    make: string;
    model: string;
    year: number;
    color: string;
    engine: {
      horsepower: number;
    };
  };
   // Function to engine's horsepower
   function getHorsepower(car: theCar) {
    return car.engine.horsepower;
  }
   let thecar:theCar={
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    engine: {
      horsepower: 200,
    },

   }
   console.log(getHorsepower(thecar));