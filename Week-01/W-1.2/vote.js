function canVote (age) {
    if (age >= 18) {
        return "You can vote.";
    } else {
        return "You cannot vote yet.";
    }
}

console.log(canVote(20));
console.log(canVote(16));