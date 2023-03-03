console.log("Hello Javascript")

// let = local , hanya berlaku di scopenya saja
// var = global variable, berlaku di semua scope
// const = local dan tidak bisa diganti    



function test()
{
    var b ="Hello"
}

if(true)
{
    var a = "Hello" 
    a = "hai"
    console.log(a)
}

const num = 10

if(num === 10)
{
    console.log("Num is 10")
}
else if(num < 10)
{
    console.log("Num is lower than 10")
}
else if(num > 10)
{
    console.log("Num is greater than 10")
}
else
{
    console.log("Num is not a number")
}

for(let i = 0; i < 10; i++)
{
    console.log(i)
}

let j = 0
while(j < 10)
{
    console.log(j)
    j++
}

console.log(plus(8, 2))

function plus(a, b)
{
    return a + b
}

const numberItem = document.getElementById("number-item")
console.log(numberItem)

