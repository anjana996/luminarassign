class Student{
    setValues(id,name,total){
        this.id=id
        this.name=name
        this.total=total
    }
    getValues(){
        console.log("id="+this.id)
        console.log("name="+this.name)
        console.log("total="+this.total)



    }
}
let obj=new Student()
obj.setValues(101,"Arun",200)
obj.getValues()