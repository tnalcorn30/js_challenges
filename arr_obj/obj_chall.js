
let house = {
    rooms: [{
        name: "bedroom",
        doors: 3,
        windows: 4,
        flooring: "carpet",
        current_occupants: []
    }, {
        name: "bath",
        doors: 2,
        windows: 0,
        flooring: "tile",
        current_occupants: []
    }, {
        name: "kitchen",
        doors: 0,
        windows: 3,
        flooring: "hardwood",
        current_occupants: []
    },
    ],
    people: [{
        name: "Justin",
        age: 28
    }, {
        name: "Tony",
        age: 8
    }
    ]
}

// 1
console.log(house.rooms[1].name) // bath
console.log(house.rooms.map(room => room.name)) // [] with all room names

house.rooms[2].current_occupants = [
    yhouse.people.map(people => people.name)
]

console.log(house.rooms[2])

