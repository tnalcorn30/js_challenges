let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// Console.log a sub array containing only "J" names

// didn't complete, here are solutions
// 8/10
let res = start.filter((name) => {
    return name[0] === "J"
})
console.log(res)
// OR
// Short but hard to think about 5/10
console.log(start.filter(name => name[0] === "J"))
// Or
// 3/10 read ability
let newArr = []
for (let i = 0; i < start.length; i++){
    if (start[i][0] === "J"){
        newArr.push(start[i])
    }
}
console.log(newArr)

// Find the average of all the students grades

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    },
]

// Also did not get it, here are possible solutions
// 1st solution
let total = 0
for (let student of students){
    console.log(student.grade)
    total += student.grade
}
let average = total / students.length
console.log(average)

// 2nd solution
let total2 = 0
students.forEach(s => total2 += s.grade)
let average2 = total2 / students.length
console.log(average2)

// 3rd solution
console.log(
    students.reduce((gpa, student) => gpa += student.grade, 0) /students.length
)

/*
let x = [1, 2, 3]
let res = x.map((x) => x * x)
res.reduce(())

Didn't get all that before he killed it.
*/

let result3 = [1, 2, 3]
    .map((x) => x*x)
    .reduce((totalVal, curValue) => totalVal += curValue, 0)


    console.log(result3)