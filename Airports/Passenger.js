const Bag = require('./Bag') // Imports bag class

class Passenger {

    //Properties
    name;
    passportNumber;
    seatNumber;
    bags;

    constructor(name, passportNumber, seatNumber) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = [] //Empty Array that will hold bag names and weight
    }
    
    //Method
    addBag(bag) {
        this.bags.push(bag)
    }
}

const brook = new Passenger('Brook', '25671', '24C');
const brookHandLuggage = new Bag(12);
const brookLargeLuggage = new Bag(21);
brook.addBag(brookHandLuggage)
brook.addBag(brookLargeLuggage)
console.log(brook.bags)

module.exports = Passenger
