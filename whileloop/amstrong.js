var num=Number(prompt("Enter a number"))
temp=num
sum=0
while(temp>0){
    rem=temp%10
    sum+=rem**3
    temp/=10
}
if(num==sum){
    console.log("Number is amstrong")
}

else{
    console.log("Number is not amstrong")
}