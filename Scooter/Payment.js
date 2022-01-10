class Payment{

    //Properties
    cardNumber;
    name;
    type;

    constructor(cardNumber, name, type) {
        this.cardNumber = cardNumber;
        this.name = name;
        this.type = type;
    }

    async verifyCardInfo() {
        if (Number.isInteger(this.cardNumber)){
            new Promise(resolve = setTimer(resolve, 5000));
            console.log("Card details have been entered");

        }else {
            new Error("You have not entered the correct details")
        }
    }

    receivePayment() {
        console.log("Thank you, payment receive")
    }
}

module.exports=Payment