
function address(users){
    let ans = users.filter(x => x.addresses.length >= 2)
    return ans
}

let users = [{
    name : "harkirat",
    age : 21,
    addresses : [{city : "chandigarh", country : "india", pincode : 1111}, {city : "chandigarh", country : "india", pincode : 1111}]

}, {
    name : "anuj",
    age : 24,
    addresses : [{city : "chandigarh", country : "india", pincode : 1111}]
}]

const ans = address(users);
console.log(ans)

users.forEach(u => {
    console.log(`${u.name}'s addresses:`, u.addresses);
});