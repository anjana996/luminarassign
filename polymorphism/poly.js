class MathsOp{
    add(){
        console.log("inside no arg method")

    }
    add(num){
        console.log("inside one arg method")

    }
    add(num1,num2){
        console.log("inside two arg method")

    }
}
let mth=new MathsOp()
mth.add(10,20);
mth.add(10);
mth.add()
//works only recently implimented method