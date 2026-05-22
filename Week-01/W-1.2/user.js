function greet(user){
    console.log("Hello " + user.name);
    console.log("You are " + user.age + " years old.");
    console.log("You are a " + user.gender);
    console.log("Hello " + user["name"]);
    console.log("You are " + user["age"] + " years old.");
    console.log("You are a " + user["gender"]);
}

function vote(user){
    if (user.age >= 18) {
        console.log("You can vote.");
    } else {
        console.log("You cannot vote yet.");
    }
}

let user = {
    name : "Adwaith",
    age : 22,
    gender : "Male"
};

greet(user);
vote(user);