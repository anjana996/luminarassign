var words="hi hello hi hello hey"
var strng=words.split(" ")
var order={}
for (item of strng){
    if (item in order){
        order[item]+=1
    }
    else{
        order[item]=1
    }
   
}
console.log(order)