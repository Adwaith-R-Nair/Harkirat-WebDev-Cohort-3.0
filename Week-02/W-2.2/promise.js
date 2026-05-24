function waitFor3S(resolve) {
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
    return new Promise(waitFor3S);
}

function main(){
    console.log("3 seconds have passed");
}

setTimeoutPromisified().then(main);