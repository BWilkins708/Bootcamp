class Customer {

    //Properties
    paymentInformation;
    personalInformation;

    constructor(paymentInformation, personalInformation){
        this.paymentInformation = paymentInformation
        this.personalInformation = personalInformation
    }
}

hasDrivingLicence() {
    if(this.personalInformation <= 17) {
        console.log("You are correct age");
        return false
    }else {
        console.log("You are not right age");
        return true
    }
}

const brook = new Customer('1234 5678 9999', 'Brook Wilkins 19');
const brook 