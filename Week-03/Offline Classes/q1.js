var users = {
    21 : "harkirat",
    24 : "akshay",
    22 : "raman",
    23 : "simran"
}

let entries = Object.entries(users);
console.log(entries)

let ans = 0

for (let i = 0; i < entries.length; i++){
    ans = ans + parseInt(entries[i][0])
}

console.log(ans);