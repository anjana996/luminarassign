class Book{
    constructor(id,name,pageno,price){
        this.id=id;
        this.name=name;
        this.pageno=pageno;
        this.price=price;        
    }
    getBook(){
        console.log(this.id)
        console.name(this.name)
    }

}
let obj=new Book(1,"test1",150,350);
let obj1=new Book(2,"test2",160,150);
let obj2=new Book(3,"test3",170,450);
let obj3=new Book(4,"test4",180,255);
var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)

for(item of arr){
    if (item.price>250) {
        console.log(item.name)
        
    }
}

for (item of arr){
    var upp=((item.name).toUpperCase());
    console.log(upp)
}
lst1=[]
for(item of arr){
    lst1.push(item.price)
    
}
var max=Math.max.apply(null,lst1)
console.log("highest price"+max)