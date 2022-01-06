const bag = require('./bag') //Imports Passenger class

class Traveller {

    //Properties
    name;
    bags;

    constructor(name) {
        this.name = name;
        this.bags = [];
    }
    //Method
    addbag(bag) {
        this.bag.push(bag)
    }
}

module.exports = Traveller
