class RechargeTeam {

    //Properties
    name;
    scooter = [8];

    constructor(name){
        this.name=name;
    }

    chargeScooter(){
        console.log('Begin charging');

        new Promise(resolve => setTimeout(resolve, 1500)); //1.5 seconds
    }
}

module.exports=RechargeTeam