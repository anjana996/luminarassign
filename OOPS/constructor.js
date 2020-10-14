class Employee{
    constructor(id,name){
        this.id=id
        this.name=name
    }
    getemp(){
        console.log("name="+this.name)
        console.log("id="+this.id)

    }

}
let obj=new Employee(102,Ajay)

obj.getemp()