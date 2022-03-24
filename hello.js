console.log("hello world");

// sum of two values :-
a=10
b=35
c=a+b
console.log(c);

//conditions :-
if(c>18)
{
    console.log("student is able");
}
else
{
    console.log("not");
}

//Loops :-
for(i=0;i<=5;i++)
{
    console.log(i);
}


//Arrow Function :-
const call = (name,surname) =>
{
    console.log(name,surname);
}
call("Kashyap","Pandya")


//Template Literal :-
var a=10;
console.log(`value of a ${a}`);


//Server Demo :-
var http = require('http');
http.createServer(function(req,res)
{
    res.end("Welcome To Node Js 1st Demo");
}).listen(3000);
console.log("server is started")



