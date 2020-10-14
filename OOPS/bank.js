class Bank{
    static setBank(){
        bname="SBN"
    }
    constructor(acno,pname){
        this.acno=acno;
        this.pname=pname;
        this.balance=1000;
    }
    deposit(amount){
        this.balace+=amount
        console.log("ypu have been credited"+this.balance+Bank.setBank)
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("error 1101")
        }
        else{
            this.balance-=amount
            console.log("debited"+this.balance+Bank.setBank)
        }
        
    }
}