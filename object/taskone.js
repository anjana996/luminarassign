var str="HHHPPPSDAAA"

var odr={}
for(item of str){
    if (item in odr ){
        odr[item]+=1;
    }
    else{
        odr[item]=1
    }
}
var out=""
for(key in odr){
    out=out+odr[key]+key
}
console.log(out)