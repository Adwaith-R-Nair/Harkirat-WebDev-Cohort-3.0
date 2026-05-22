function greet(user){
    console.log("Hello " + user.name);
    console.log("You are " + user.age + " years old.");
    console.log("You are a " + user.gender);
    console.log("Hello " + user["name"]);
    console.log("You are " + user["age"] + " years old.");
    console.log("You are a " + user["gender"]);
}

let user = {
    name : "Adwaith",
    age : "22",
    gender : "Male"
};

greet(user);
