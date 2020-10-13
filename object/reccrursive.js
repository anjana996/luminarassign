var strng="ABABAACCA"
var order={}
for (char of strng){
    if (char in order){
        order[char]+=1
    }
    else{
        order[char]=1
    }

}
console.log(char)