const Bag = require('../Bag')


describe('definer a suit of tests for the Bag class', function () {

    test('has correct weight', function () {

        const mandyBag = new Bag(16);

        expect(mandyBag.weight).toBe(16);

    });

    test('heavy bag is over limit', function () {

        const mandyBag = new Bag(25);

        expect(mandyBag.isOverLimit()).toBe(true);
    });

    test('bag is under limiit', function () {

        const mandyBag = new Bag(8);

        expect(mandyBag.isOverLimit()).toBe(false);
    });
})