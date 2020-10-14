class parent{
    phone(){
        console.log("parent have 1001");
    }
}
class childone extends parent{
m1(){
    console.log("inside parent");
}
}
class child extends childone{

}
let obj=new child();
obj.phone()