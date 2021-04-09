/*
For a range of numbers (1...100):
    if the number is div evenly by:
        3 -> fizz
        5 -> buzz
        3 & 5 -> fizzBuzz
        otherwise -> print the number
    1
    2
    fizz
    4
    buzz
    ..
    14
    fizzBuzz
    ..
    99
    buzz

1. Bronze if you solve it with a for loop and if statements
2. Silver if you solve it with a while loop and switch
3. Gold if you solve it with a for loop and ternaries
*/

// My attempt at 1, which works
let x = 100;
for (let x = 1; x <= 100; x++){
    if ((x % 3 === 0) && (x % 5 === 0)){
        console.log("fizzbuzz");
    } else if (x % 5 === 0){
        console.log("buzz");
    } else if (x % 3 === 0){
        console.log("fizz");
    } else {
        console.log(x);
    }
}

// Justin's versions
// 1
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0)
        console.log("fizzBuzz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else if (i % 3 === 0){
        console.log("fizz")
    } else {
        console.log(i);
    }

// 2
let x = 1;
while(x <= 100){
    switch (true) {
        case x % 15 == 0:
            console.log("fizzBuzz");
            break;
        case x % 3 == 0:
            console.log("fizz");
            break;
        case x % 5 == 0:
            console.log("buzz");
            break;
        default:
            console.log(x);
    }
    x++
}

// 3

for(let z = 1; z <= 100; z++){
    (z % 3 === 0 && z % 5 === 0) ? console.log("fizzBuzz")
    : (z % 5 === 0) ? console.log("buzz")
    : (z % 3 === 0) ? console.log("fizz")
    : console.log(z)
}

// Food for thought
for(let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        if (i % 5 === 0) console.log("fizzBuzz")
        else console.log("fizz")
    } else if(i % 5 === 0) console.log("buzz")
    else console.log(i)
}