function legalUsers(users) {
    let ans = users.filter(x => x.age >= 18);
    return ans
}

let users = [{
    name : "harkirat",
    age : 21
}, {
    name : "raman",
    age : 18
}, {
    name : "anuj",
    age : 9
}]

const ans = legalUsers(users);
console.log(ans)