/*
Part One
Create a class for vehicle. Each vehicle instance should have the following properties:

make
model
year
Each vehicle instance should have access to a method called honk, 
which returns the string “Beep.”
*/
class Vehicle {
  // year will be formated to determin if value is an integer (Number.isInteger(year))
  constructor(make, model, year) {
    if (Number.isInteger(year)) {
      `Vehicle is '${year}' make and model`;
    } else {
      throw new Error(`value for'${year}' is not a number`);
    }
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep";
  }
  toString() {
    return `${this.make}, ${this.model}, ${this.year}`;
  }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); // "Beep."
//Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
/*
Part Two
Create a class for a car. The Car class should inherit from Vehicle and 
each car instance should have a property called numWheels which has a value of 4.
*/
// inherit from vehicle
class Car extends Vehicle {
  numWheels = 4;
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk()); // "Beep."
console.log(myFirstCar.numWheels); // 4
/*
Part Three
Create a class for a Motorcycle. This class should inherit from Vehicle 
and each motorcycle instance should have a property called numWheels which has a value of 2.
 It should also have a revEngine method which returns “VROOM!!!”
*/

class Motorcycle extends Vehicle {
  numWheels = 2;
  revEngine() {
    return "Vroom!!!";
  }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

console.log(myFirstMotorcycle.honk()); // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels); // 2
/*
Part Four
Create a class for a Garage. It should have a property called vehicles 
which will store an array of vehicles, and a property called capacity
 which is a number indicating how many vehicles will fit in the garage.
  When you create a garage, vehicles will always be empty;
   you only need to provide the capacity.

A garage should also have an add method,
 which attempts to add a vehicle to the array of 
 vehicles. However, if you try to add something 
 which is not a vehicle, the garage should return the message
“Only vehicles are allowed in here!”. Also, if the garage is at capacity,
it should say “Sorry, we’re full.”
*/

class Garage {
  constructor(capacity) {
    if (Number.isInteger(capacity)) {
      `Garage is ${capacity} capacity`;
    } else {
      throw new Error(`value for'${capacity}' is not a number`);
    }
    this.capacity = capacity;
  }
  // declear an array to push in vehicles
  vehicles = [];
  add(addVehicle) {
    try {
      addVehicle.beep() === -1;
    } catch (e) {
      return "Only vehicles are allowed in here!";
    }
    // capacity must have space in other to add verhicle
    if (this.capacity > this.vehicles.length) {
      this.vehicles.push(addVehicle);
      return " add Vehicle!";
    } else {
      return "Sorry, we're full.";
    }
  }
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
