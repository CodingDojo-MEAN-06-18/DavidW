// part 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

console.log("Part 1:")
console.log("")
for (var element of students){
    console.log("Name: " + element.name + ", Cohort: " + element.cohort);
}
console.log("")

// part 2
let users = {
    employees: [
        {'first_name': 'Miguel', 'last_name': 'Jones'},
        {'first_name': 'Ernie', 'last_name': 'Bertson'},
        {'first_name': 'Nora', 'last_name': 'Lu'},
        {'first_name': 'Sally', 'last_name': 'Barkyoumb'}
    ],
    managers: [
       {'first_name': 'Lillian', 'last_name': 'Chambers'},
       {'first_name': 'Gordon', 'last_name': 'Poe'}
    ]
};

console.log("Part 2:")
console.log("")

console.log("EMPLOYEES")
for (let [index, element] of users.employees.entries()){
    let length = ((element.last_name + element.first_name).length)
    console.log(index + 1 + " - " + element.last_name + ", " + element.first_name + " - " + length)
}
console.log("")
console.log("MANAGERS")
for (let [index, element] of users.managers.entries()){
    let length = ((element.last_name + element.first_name).length)
    console.log(index + 1 + " - " + element.last_name + ", " + element.first_name + " - " + length)
}

// after solutions i worked through it for the cleaner version:
// 
// for (const key in users) {
//     console.log(key.toUpperCase());
//     for (let index = 0; index < users[key].length; index++){
//         const count = index + 1;
//         const first_name = users[key][index].first_name;
//         const last_name = users[key][index].last_name;
//         const length = first_name.length + last_name.length;
//         console.log(`${count} - ${last_name}, ${first_name} - ${length}`);
//         }
//         console.log("");
// }
