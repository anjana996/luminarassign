class Parent{
    phone(){
        console.log("pareny have some nokia")
    }
}
class Child extends Parent{
    phone(){
        console.log("have i phone")
    }

}
let obj=new Child()
obj.phone()