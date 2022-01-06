const Passenger = require('../Passenger')
const Bag = require('../Bag')

describe('Test Passenger has bag', function () {

    test('has correct luggage', function () {

        const brookHandLuggage = new Bag(12);

        expect(brookHandLuggage).toBe(12);
    });