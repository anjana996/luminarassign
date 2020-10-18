let employee=[

		{eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"lari",desig:"qa",join:1987,resign:2010},
]
// qs1: print all employee name and designation only
var result=employee.map(emp=>({name:emp.name,desig:emp.desig}));
console.log(result)
// qs2:print all employee details whose desig equals devop
var desi=employee.filter(emp=>emp.desig=="devop");
console.log(desi)
// 	qs3:print all employee details those who are woking in 80s  [*(>1980 & <1190)]
var year=employee.filter(emp=>emp.join<1990);
console.log(year)
// 	qs4:print all employee details those who have experience >9 years
var exp=employee.filter(emp=>(emp.resign-emp.join)>9)
console.log(exp)
// 	qs5:sort all employees based on theire joining year
var expp=employee.sort((emp1,emp2)=>emp1.join-emp2.join)
console.log(expp)
