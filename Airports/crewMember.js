const Bag = require('./Bag')//Imports bag
const Traveller = require('./Traveller')


class crewMember {

    //Properties
    name;
    position;
    staffNumber;

    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
    }
}

const vicky = new crewMember('vicky', 'Air hostess', '337');