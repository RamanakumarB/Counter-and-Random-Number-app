function one()
{
    var num = 45
    console.log("I am one")
    two(num)
}
 function two(num)
 {
    console.log("I am two")
    three(num)
 }
function three(num)
{
    
    console.log("I am three")
    console.log("Three received Number:"+ num)
}

one()