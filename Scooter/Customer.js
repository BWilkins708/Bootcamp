const Scooter = require('./Scooter');
const RechargeTeam = require('./RechargeTeam');
const Payment = require('./Payment');


class Customer {

    //Properties
    name;
    age;
    email;
    location;

    constructor(name, age, email, location){
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
    }

    isOfAge() {
        if(this.age <= 17) {
            console.log("You are correct age");
            return false
        }else {
            console.log("You are not right age");
            return true
        }
    }
}

const b = new Customer('Brook', 19, 'abcd@gmail.com', 'Essex')
const j = new Customer('Jane', 34, 'efgh@gmail.com', 'London')

module.exports=Customer