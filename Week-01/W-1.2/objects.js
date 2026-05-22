function maleVoters(users) {
    let arr1 = [];
    for(let i = 0; i < users.length; i++) {
        if (users[i].age >= 18 && users[i].gender === "Male") {
            arr1.push(users[i].name);
        }
    }
    return arr1;
}

const users = [
    {
        name: "Adwaith",
        age: 22,
        gender: "Male"
    },
    {
        name: "Diya",
        age: 21,
        gender: "Female"
    },
    {
        name: "Aadya",
        age: 10,
        gender: "Female"
    },
    {
        name: "Ankith",
        age: 16,
        gender: "Male"
    }
];

const ans = maleVoters(users);
console.log(ans);