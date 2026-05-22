function greet(user){
    console.log("Hello " + user.name);
    console.log("You are " + user.age + " years old.");
    console.log("Hello " + user["name"]);
    console.log("You are " + user["age"] + " years old.");
}

let user = {
    name : "Adwaith",
    age : "22"
};

greet(user);
