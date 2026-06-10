const numbers = [1,2,3,4,5];
// let ans = numbers.filter(function(n){
//     // if (n % 2 == 0){
//     //     return true;
//     // } else {
//     //     return false
//     // }
//     return n % 2 == 0
// })

let ans = numbers.filter(n => {
    return n % 2 == 0
})

console.log(ans)