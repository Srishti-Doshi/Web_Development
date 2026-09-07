abstract class Payment{
    constructor(protected amount: number, protected account: number){}

    isPaymentValid(amount: number){
        return this.amount > 0;
    }
}
// payment class consist of essentials , base properties and there isno need to create object of it 


class Paytm extends Payment{

}

let user = new Paytm(1200, 123)
user.isPaymentValid(50)
