let array = [1, 2 ,3 ,4, 5, 6, 10, 11, 2, 3]

let result = array.filter(num => num % 2 !== 0).map(num => num * 2);
console.log(result)