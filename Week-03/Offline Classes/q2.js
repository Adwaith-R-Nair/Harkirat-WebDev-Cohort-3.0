var users = { 
    21: "harkirat",
    24: "akshay",
    22: "raman",
    23:"simran",

}

let entries = Object.entries(users);
let young="";
let age=10000000;
for(let i=0;i<entries.length;i++){
    if(age>entries[i][0]){
        young=entries[i][1];
        age=entries[i][0];
    }
}
let ages=Object.keys(users)
let sum=0
for(let i=0;i<ages.length;i++){
        sum+=Number(ages[i])
}
ages.sort((a,b) => a-b)

console.log(young)
console.log(sum)
console.log(users[ages[1]])