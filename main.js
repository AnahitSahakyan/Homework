console.log ("Exercise 1- Print a Triangle");
console.log ("\n");

var triangleRows = 7;
for (var i = 1; i <= triangleRows; i++)
{
    for (var j = 1; j <= i; j++)
    { 
        console.log ("*");
    }
    console.log ("\n");
}

console.log ("Exercise 2- Print a Square");
console.log ("\n");

var squareRows= 8;
for (var i = 1; i <= squareRows; i++)
{
    for (var j = 1; j <= squareRows; j++)
    { 
        console.log ("*");
    }
    console.log ("\n");
}


console.log ("Exercise 3- Print Numbers");
console.log ("\n");

for (var n = 1; n <= 100; n++)
{
    if (n % 3 == 0 && n % 5 == 0 )
    { 
        console.log ("BuzzFuzz");
    }
   else if (n % 3 == 0)
    { 
        console.log ("Fuzz");
    }

    else if (n % 5 == 0)
    { 
        console.log ("Buzz");
    }

    else 
    {
        console.log (n);
    }
}