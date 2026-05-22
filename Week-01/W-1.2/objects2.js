function maleVoters(users) {
    return users
        .filter(user => user.age >= 18 && user.gender === "Male")
        .map(user => user.name);
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