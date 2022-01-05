class Bag {

    // properties
    weight;
    
    /**
     * Constructs a new instance of the Bag class
     * @param {Number} weight 
     */
    constructor(someWeight) {
        // set the weight that is passed in to be the weight of "this" new instance we are constructing
        this.weight = someWeight;
    }

    isOverLimit() {
        // TODO - add code to check if weight of the bag is over the limit (23kg)
        if(this.weight <= 23) {
            console.log("This bag is correct weight");
        }else 
            console.log("This bag is over limit");
    }
}

// Test code
const mandyBag = new Bag(16);
const ucheBag = new Bag(25);

console.log(mandyBag.isOverLimit()); 
console.log(ucheBag.isOverLimit()); 